import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const FullViewImage = ({
  currentFullViewImageIndex,
  SetCurrentFullViewImageIndex,
  
}) => {
  return (
    <div className={"fullView  "}>
      {/* <CustomContainer> */}
      <div className={"top"}>
        <CloseIcon onClick={() => SetCurrentFullViewImageIndex(null)} />
      </div>
      <div className={"img  w-full relative"}>
   
        <Image
        className=' !w-[300px] !h-[300px]'
        width={400}
        height={400}
        fluid
        src={currentFullViewImageIndex} alt="xx"  />
    
    <CloseIcon className='absolute top-12  bg-slate-50 rounded-md ' onClick={() => SetCurrentFullViewImageIndex(null)} />


      </div>
    
    </div>
  );
};

export default FullViewImage;