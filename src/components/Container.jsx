import React from 'react';
import Card from './Card';

const Container = ({ files , isMyProfile}) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-14 justify-center">
      {files.map((item, index) => (
        <Card key={index} item={item} isMyProfile={isMyProfile} />
      ))}
    </div>
  );
};

export default Container;
