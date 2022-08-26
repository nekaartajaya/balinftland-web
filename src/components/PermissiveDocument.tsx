import {Text} from '@chakra-ui/react';

import {useState} from 'react';
import {Document, Page, pdfjs} from 'react-pdf';

import CustomModal from './CustomModal';

import {ArrowCircleLeft, ArrowCircleRight} from 'iconsax-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

enum DocumentTypeEnum {
  LEASEHOLD = 'leasehold',
  TIMESHARE = 'timeshare',
}

type DocumentProps = {
  type?: DocumentTypeEnum;
};

const PermissiveDocument = ({type = DocumentTypeEnum.TIMESHARE}: DocumentProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isOpenModalBurn, setIsOpenModalBurn] = useState<boolean>(false);

  const onDocumentLoadSuccess = ({numPages}: {numPages: number}) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offSet: number) => {
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  };

  const changePageBack = () => {
    changePage(-1);
  };

  const changePageNext = () => {
    changePage(+1);
  };

  if (type === DocumentTypeEnum.LEASEHOLD) {
    return (
      <div className="pt-8 px-6">
        <div className="flex gap-4 justify-between items-center">
          <div>
            <Text className="text-base font-semibold mb-2">Leasehold Document</Text>
            <Text className="text-sm font-normal mb-4">Preview of physical leasehold rights</Text>
          </div>
          <div className="flex gap-2">
            <button onClick={pageNumber > 1 ? changePageBack : null}>
              <ArrowCircleLeft size="32" color={pageNumber > 1 ? '#131736' : '#BABABA'} />
            </button>
            <button onClick={pageNumber < numPages ? changePageNext : null}>
              <ArrowCircleRight size="32" color={pageNumber < numPages ? '#131736' : '#BABABA'} />
            </button>
          </div>
        </div>

        <Document
          file={`https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page height="600" pageNumber={pageNumber} />
        </Document>
        <div className="text-center">
          Page {pageNumber} of {numPages}
        </div>

        <button
          className="w-full bg-[#436CFF] text-white rounded-[4px] p-2 mt-5"
          onClick={() => setIsOpenModalBurn(true)}
        >
          Burning NFTs
        </button>
        <ModalBurn isOpenModalBurn={isOpenModalBurn} setIsOpenModalBurn={setIsOpenModalBurn} />
      </div>
    );
  }

  return (
    <div className="pt-8 px-6">
      <div className="flex gap-4 justify-between items-center">
        <div>
          <Text className="text-base font-semibold mb-2">Timeshare Document</Text>
          <Text className="text-sm font-normal mb-4">Preview of timeshare document</Text>
        </div>
        <div className="flex gap-2">
          <button onClick={pageNumber > 1 ? changePageBack : null}>
            <ArrowCircleLeft size="32" color={pageNumber > 1 ? '#131736' : '#BABABA'} />
          </button>
          <button onClick={pageNumber < numPages ? changePageNext : null}>
            <ArrowCircleRight size="32" color={pageNumber < numPages ? '#131736' : '#BABABA'} />
          </button>
        </div>
      </div>

      <div className="relative">
        <Document
          file={`https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page height="600" pageNumber={pageNumber} />
        </Document>
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
          Property Of Digiland
        </div>
      </div>
      <div className="text-center">
        Page {pageNumber} of {numPages}
      </div>

      <button
        className="w-full bg-[#436CFF] text-white rounded-[4px] p-2 mt-5"
        onClick={() => setIsOpenModalBurn(true)}
      >
        Burning Protocol
      </button>
      <ModalBurn isOpenModalBurn={isOpenModalBurn} setIsOpenModalBurn={setIsOpenModalBurn} />
    </div>
  );
};

const ModalBurn = ({isOpenModalBurn, setIsOpenModalBurn}) => {
  return (
    <CustomModal
      isOpen={isOpenModalBurn}
      title={'Coming Soon'}
      type={'small'}
      onClose={() => setIsOpenModalBurn(!isOpenModalBurn)}
    >
      <div className="text-[#131736] text-[14px] my-6">
        Burning your NFTs will allow you to turn your NFTs Apartment digital model into conventional
        model, and get physical land certificate. To do this action, kindly visit DigilandbaliHQ
      </div>
      <div className="w-full flex justify-end">
        <button
          className="p-[12px] rounded-[4px] bg-[#436CFF] w-[180px]"
          onClick={() => {
            setIsOpenModalBurn(!isOpenModalBurn);
          }}
        >
          <div className="text-[14px] text-white">Dismiss</div>
        </button>
      </div>
    </CustomModal>
  );
};

export default PermissiveDocument;
