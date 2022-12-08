import ImageInput from '@components/global/ImageInput';
import Image from 'next/legacy/image';

const MintFormUpload = ({ onNext }: { onNext: () => void }) => {
  return (
    <div className="flex justify-center max-w-[900px] w-full border border-dark-blue">
      <div className="max-w-[800px] w-full bg-white flex flex-col gap-y-4 items-center py-10">
        <span className="text-[22px] text-blue tracking-[6px] font-medium">
          UPLOAD YOUR NFT, FRAGMENT
        </span>
        <ImageInput
          required
          size={'medium'}
          onFileChange={(file) => console.log(file)}
        />
      </div>

      <button
        className="bg-dark-blue max-w-[100px] w-full relative"
        onClick={onNext}
      >
        <Image
          src="/images/icons/arrow-right.png"
          alt="Next Icon"
          layout="responsive"
          width={14}
          height={22}
        />
      </button>
    </div>
  );
};

export default MintFormUpload;
