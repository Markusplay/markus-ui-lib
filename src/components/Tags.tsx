import React, { FC } from 'react';

export interface ITagsProps {
  tags: string[];
  className: string;
  tagClassName: string;
}

export const Tags: FC<ITagsProps> = ({ tags, className, tagClassName }) => {
  return (
    <div className={className}>
      {tags.map(tag => (
        <b className={tagClassName} key={tag}>
          {tag}
        </b>
      ))}
    </div>
  );
};
