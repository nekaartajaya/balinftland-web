import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import {useState} from 'react';
import FormDescription from './FormDescription';
import FormInputText from './FormInputText';
import FormLabel from './FormLabel';

const FormTraits = ({
  name,
  text,
  description,
}: {
  name: string;
  text: string;
  description: string;
}) => {
  const [items, setItems] = useState<Array<any>>([]);

  const addItems = () => {
    if (items.length > 0) {
      let newItem = items[items.length - 1].id + 1;
      setItems([...items, {id: newItem}]);
    } else {
      setItems([...items, {id: 1}]);
    }
  };

  const deleteItem = (index: number) => {
    let newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-x-8 gap-y-5">
          <FormLabel text={text} />
          <FormDescription text={description} />
        </div>
        <button
          className="border border-[3px] border-light-grey p-3 rounded-[10px] w-16 h-16"
          onClick={addItems}
        >
          <AddIcon color="primary" fontSize="medium" />
        </button>
      </div>

      {items && (
        <div className="mt-4">
          {items.map((item, index) => {
            return (
              <div key={index} className="flex justify-between gap-x-2 mb-4">
                <FormInputText
                  name={`${name}[name][]`}
                  placeholder="Name"
                  type="text"
                  classes="w-full"
                />
                <FormInputText
                  name={`${name}[value][]`}
                  placeholder="Value"
                  type="text"
                  classes="w-full"
                />
                <button
                  className="border border-[3px] border-light-grey p-3 rounded-[10px]"
                  onClick={() => deleteItem(index)}
                >
                  <ClearIcon color="error" fontSize="medium" />
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FormTraits;
