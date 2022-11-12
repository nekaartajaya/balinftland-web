import ImageInput from '@components/global/ImageInput';

const MintUploadForm = () => {
  return (
    <div className="flex justify-center max-w-[900px] w-full border border-dark-blue">
      <div className="max-w-[800px] w-full bg-white flex flex-col gap-y-4 items-center py-10">
        <span className="text-[22px] text-blue tracking-[6px]">UPLOAD YOUR NFT, FRAGMENT</span>
        <ImageInput required size={'medium'} onFileChange={(file) => console.log(file)} />
      </div>

      <button className="bg-dark-blue max-w-[100px] w-full ">
        <img src="/images/icons/arrow-right.png" alt="Next" className="mx-auto w-6" />
      </button>
    </div>
  );
};

export default MintUploadForm;
