'use client'
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import globals from '@/utils/globals';
import { ApiClientError, ApiClientSuccess } from '@/utils/ApiClient';
import { toast } from 'react-toastify';
import NotFoundPage from '@/app/not-found';
import { IUser } from '@/interfaces/user';
import { H } from '@/components';

const api = globals.getApiClient();

  const getUser = async (id: string, cb = (user: any) => {}, setLoading = (x:boolean)=>{}) => {
    const res = await api.get(`/users/confirm-email?id=${id}`);
    if (res instanceof ApiClientError) {
      console.error(res);
      toast.error(res.message);
      return;
    }
    if (res instanceof ApiClientSuccess) {
      if (res.data.message) {
        toast.success(res.data.message);
      }

      console.log(res);
      const user:IUser = res.data;
      cb(user);
      setLoading(false)
    }
    // setCurrentUser(user);
  };

const EmailConfirmationPage = () => {
  const searchParams = useSearchParams();
  const userId = String(searchParams.get('token'));
  const [currentStatus, setCurrentStatus] = useState<any | undefined>(undefined);
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if(loading && !currentStatus){
      getUser(userId, setCurrentStatus, setLoading);
    }
    else return;
  }, [currentStatus, searchParams, loading]);

  // @ts-ignore
  return (loading || currentStatus === undefined) ? (
    <NotFoundPage />
  ) : (
    <>
      <H level={1}> Confirmare Email</H>
      <H  level={'p'}>{currentStatus.message}</H>
    </>
  );

  // const user = await api.get(`/users${userId}`);
}

export default EmailConfirmationPage;