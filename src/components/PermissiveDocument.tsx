import {Text} from '@chakra-ui/react';

enum DocumentTypeEnum {
  LEASEHOLD = 'leasehold',
  TIMESHARE = 'timeshare',
}

type DocumentProps = {
  type?: DocumentTypeEnum;
};

const PermissiveDocument = ({type = DocumentTypeEnum.TIMESHARE}: DocumentProps) => {
  if (type === DocumentTypeEnum.LEASEHOLD) {
    return (
      <div className="pt-8 px-6">
        <Text className="text-base font-semibold mb-2">Leasehold Document</Text>
        <Text className="text-sm font-normal mb-4">Preview of physical leasehold rights</Text>

        <h1>THIS IS WHERE THE PDF SHOULD BE</h1>
      </div>
    );
  }

  return (
    <div className="pt-8 px-6">
      <Text className="text-base font-semibold mb-2">Timeshare Document</Text>
      <Text className="text-sm font-normal mb-4">Preview of timeshare document</Text>

      <h1>THIS IS WHERE THE PDF SHOULD BE</h1>
    </div>
  );
};

export default PermissiveDocument;
