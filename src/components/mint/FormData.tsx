import FormDescription from '@components/global/FormDescription';
import FormInputText from '@components/global/FormInputText';
import FormLabel from '@components/global/FormLabel';
import FormRoyalti from '@components/global/FormRoyalti';
import FormSwitch from '@components/global/FormSwitch';
import FormTraits from '@components/global/FormTraits';

const MintFormData = () => {
  return (
    <>
      <div className="w-full bg-white flex flex-col gap-y-4 items-center py-10">
        <span className="text-[22px] text-blue tracking-[6px] font-medium mb-4">
          ENTRY DATA
        </span>
        <div className="max-w-[550px] w-full flex flex-col gap-y-14">
          <div className="flex flex-col gap-y-4">
            <FormLabel text="Name" />
            <FormInputText type="text" name="name" placeholder="Item Name" />
          </div>
          <div className="flex flex-col gap-y-4">
            <FormLabel text="Description" />
            <FormInputText
              type="textarea"
              name="description"
              placeholder="Provide a detailed description of your item."
              rows={6}
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <FormLabel text="Collection" />
            <FormInputText
              type="text"
              name="collection"
              placeholder="Wertoy Collection"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <FormTraits
              name="properties"
              text="Properties"
              description="Textual traits that show up as rectangels"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <FormTraits
              name="levels"
              text="Levels"
              description="Numerical traits that show as a progress bar"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <FormTraits
              name="stats"
              text="Stats"
              description="Numerical traits that just show as number"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <FormLabel text="Unlockable Content" />
            <div className="flex justify-between gap-x-8">
              <FormDescription text="Include unlockable content that can only be revealed by the owner of the item." />
              <FormSwitch
                defaultChecked
                inputProps={{ 'aria-label': 'ant design' }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <FormLabel text="Explicit & Sensitive Content" />
            <div className="flex justify-between gap-x-8">
              <FormDescription text="Set this item as explicit and sensitive content" />
              <FormSwitch
                defaultChecked
                inputProps={{ 'aria-label': 'ant design' }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <FormLabel text="Supply" />
            <FormDescription text="The number of items that can be minted. No gas cost to you!" />
            <FormInputText type="text" name="supply" placeholder="0" />
          </div>
          <div className="flex flex-col gap-y-4">
            <FormRoyalti />
          </div>
          <div className="flex flex-col gap-y-4">
            <FormLabel text="Sale Price" />
            <FormInputText type="text" name="sale_price" placeholder="Vaue" />
          </div>
        </div>
      </div>

      <button className="bg-dark-blue w-full py-4 flex gap-x-4 justify-center items-center">
        <span className="text-[32px] text-white font-bold tracking-widest">
          MINT YOUR NFT
        </span>
        <img src="/images/icons/arrow-right.png" alt="Next" className="w-6" />
      </button>
    </>
  );
};

export default MintFormData;
