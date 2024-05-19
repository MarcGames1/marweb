import ToggleSwitch, { ToggleSwitchProps } from '@/components/UI/ToggleSwitch/ToggleSwitch';

interface ToggleSectionProps extends ToggleSwitchProps{
  label: string;
}

const ToggleSection = ({label, name, onChange, initialValue}:ToggleSectionProps) =>{
  return(
    <>
      <div className={'flex flex-row items-start justify-between w-full lg:w-1/2 gap-3'}>
        <span className={' w-3/4 self-start text-left'}>{label}</span>
        <div className={'w-1/4 self-end'}>
          <ToggleSwitch
            name={name}
            initialValue={initialValue}
            onChange={onChange}
          />
        </div>

      </div>
    </>
  )
}

export default ToggleSection