import { PostWithUser } from '@/lib/db';
import { formatTimeAgo} from '@/lib/utils';
import Button from './Button';
import { CommentIcon, LikeIcon, ShareIcon } from '@/lib/icons';
import Emoji from './Emoji';
import Image from 'next/image';



function Post({ data }:{data:PostWithUser}) {
  const {content,createdAt,userName,userProfile } = data;
  
  return (
    <div className="rounded-xl bg-card-grey shadow-md overflow-hidden p-0 border-card-grey border-8 w-full max-w-[600px] animate-slidedown mb-8">
      <div className="border-none bg-white rounded-xl p-2">
        <div className="flex items-center mb-4 rounded-xl">
          <Image src={userProfile} alt={userName} className="w-10 h-10 rounded-full object-cover mr-3" width={40} height={40} />
          <div>
            <div className="font-medium">{userName}</div>
            <div className="text-sm text-gray-500">{formatTimeAgo(createdAt.toString())}</div>
          </div>
        </div>
        
        <div className="flex">
          <span className="w-28 h-fit rounded-full  mr-3 bg-[#F2F2F2] text-center py-1.5 min-w-[36px] max-w-[38px]">{<Emoji/>}</span>
          <p className="text-[#000] text-sm leading-relaxed">{content}</p>
        </div>
      </div>
      
      <div className="flex pl-2 bg-card-grey">
        <Button featureFlag={false} className="pt-1.5 mr-5 h-10 w-auto" icon={<LikeIcon/>}>
        </Button>
        <Button featureFlag={false} className="pt-1.5 mr-5 h-10 w-auto" icon={<CommentIcon/>}>
        </Button>
        <Button featureFlag={false} className="pt-1.5 h-10 w-auto" icon={<ShareIcon/>}>
        </Button>
      </div>
    </div>
  );
}

export default Post;