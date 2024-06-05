import { PicItem } from '@/declarations/mediaItems';
import Globals from '@/utils/globals';

class PictureData implements PicItem {
  alt: string;
  id: string;
  path: string;
  title: string;
  private readonly constants = Globals
  constructor(data:PicItem){
    this.alt = data?.alt
    this.path = data.path
    this.id = data.id
    this.title = data.title
  }
  get url ():string {
    return `${this.constants.API}${this.path}`
  }
}

export default PictureData