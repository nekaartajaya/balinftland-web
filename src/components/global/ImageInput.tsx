/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ChangeEvent, DragEvent, MouseEvent, useRef, useState } from 'react';
import Image from 'next/image';

type SizeInputImage = 'small' | 'medium' | 'large';

interface SizeXY {
  X: string;
  Y: string;
}

const SizeInputImageValue: Map<SizeInputImage, SizeXY> = new Map<
  SizeInputImage,
  SizeXY
>([
  ['small', { X: '160px', Y: '160px' }],
  ['medium', { X: '400px', Y: '280px' }],
  ['large', { X: '100%', Y: '200px' }],
]);

const ImageInput = ({
  label,
  required = false,
  message,
  size,
  onFileChange,
}: {
  label?: string;
  required?: boolean;
  message?: string;
  size: SizeInputImage;
  onFileChange?: (file: File | null | undefined) => void;
}) => {
  const fileInput = useRef<HTMLInputElement>(null);

  const sizeValue: SizeXY = SizeInputImageValue.get(size ?? 'medium') ?? {
    X: '160px',
    Y: '160px',
  };

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onInputFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;

    onFileChange && onFileChange(files?.item(0));
    setImagePreview(
      files && files.length > 0 ? URL.createObjectURL(files[0]) : null,
    );
  };

  const onDragOverFile = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const onDropFile = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const files: FileList | null = e.dataTransfer.files;
    console.log(e.dataTransfer.files);

    onFileChange && onFileChange(files?.item(0));
    setImagePreview(
      files && files.length > 0 ? URL.createObjectURL(files[0]) : null,
    );
  };

  const handleRemove = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onFileChange && onFileChange(null);
    setImagePreview(null);
  };

  return (
    <div className="mb-6">
      {label && (
        <label className="font-display text-dark-navy mb-2 block dark:text-white">
          {label}
          {required && <span className="text-red">*</span>}
        </label>
      )}

      <p className="text-dark-grey dark:text-grey text-2xs mb-3">{message}</p>

      <div
        onClick={() => fileInput?.current?.click()}
        onDragOver={onDragOverFile}
        onDrop={onDropFile}
        style={{
          maxWidth: sizeValue.X,
          maxHeight: sizeValue.Y,
          width: sizeValue.X,
          height: sizeValue.Y,
        }}
        className="dark:bg-dark-navy border-[#0E3D5B80] group relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white py-20 px-5 text-center cursor-pointer"
      >
        {imagePreview && (
          <div className="w-full z-10 dark:bg-black bg-black absolute inset-0 cursor-pointer rounded opacity-0 dark:hover:opacity-60 hover:opacity-30">
            <div
              onClick={handleRemove}
              className="z-50 absolute top-0 right-0 p-2"
            >
              <svg
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-white"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.75789 0.707078C1.36736 0.316554 0.734199 0.316554 0.343674 0.707078C-0.0468498 1.0976 -0.0468498 1.73077 0.343674 2.12129L4.5864 6.36401L0.343825 10.6066C-0.0466988 10.9971 -0.0466988 11.6303 0.343825 12.0208C0.73435 12.4113 1.36751 12.4113 1.75804 12.0208L6.00061 7.77823L10.2432 12.0208C10.6337 12.4113 11.2669 12.4113 11.6574 12.0208C12.0479 11.6303 12.0479 10.9971 11.6574 10.6066L7.41482 6.36401L11.6575 2.1213C12.0481 1.73078 12.0481 1.09761 11.6575 0.707091C11.267 0.316566 10.6338 0.316566 10.2433 0.707091L6.00061 4.9498L1.75789 0.707078Z"
                />
              </svg>
            </div>
          </div>
        )}
        <div>
          <input
            type={'file'}
            accept="image/*"
            ref={fileInput}
            hidden
            onChange={onInputFileChange}
          />
        </div>
        {imagePreview ? (
          <Image
            src={imagePreview}
            layout={'fill'}
            alt="preview image"
            objectFit="cover"
            className="rounded-lg"
          />
        ) : (
          <div className="relative z-10">
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42 37.3333V4.66667C42 2.1 39.9 0 37.3333 0H4.66667C2.1 0 0 2.1 0 4.66667V37.3333C0 39.9 2.1 42 4.66667 42H37.3333C39.9 42 42 39.9 42 37.3333ZM12.8333 24.5L18.6667 31.5233L26.8333 21L37.3333 35H4.66667L12.8333 24.5Z"
                fill="#9AA09D"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageInput;
