import FormDescription from './FormDescription';
import FormLabel from './FormLabel';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import FormInputText from './FormInputText';
import {useState} from 'react';

const FormRoyalti = () => {
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
    <>
      <FormLabel text="Royalti" />
      <div className="flex justify-between gap-x-8">
        <FormDescription text="The number of royalty for creator NFT’s." />
        <button className="text-[#9E9E9E] text-[18px] pr-6 relative" onClick={addItems}>
          Add <AddIcon fontSize="medium" className="absolute top-[-5px]" />
        </button>
      </div>
      <div>
        <div className={`flex justify-between gap-x-2 ${items && 'mb-4'}`}>
          <FormInputText type="text" name="adress[]" placeholder="Addess" classes="w-full" />
          <FormInputText type="text" name="royalti[]" placeholder="Total" classes="w-full" />
        </div>
        {items.map((item, index) => {
          return (
            <div key={index} className="flex justify-between gap-x-2 mb-4">
              <FormInputText type="text" name="adress[]" placeholder="Addess" classes="w-full" />
              <FormInputText type="text" name="royalti[]" placeholder="Total" classes="w-full" />
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
    </>
  );
};

export default FormRoyalti;
