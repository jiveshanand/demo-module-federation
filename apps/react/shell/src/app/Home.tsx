import React from 'react';

export const Home = ({
  setValue,
}: {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <div>Click on the trigger button to pass data to remote app</div>
      <button
        onClick={() => {
          setValue('Trigger Button has been Clicked');
        }}
      >
        Trigger
      </button>
    </>
  );
};
