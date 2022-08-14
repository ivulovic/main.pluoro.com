import { MouseEventHandler } from 'react';

export interface IHeroProps {
  onLearnMoreClick: MouseEventHandler<HTMLButtonElement>;
}

export interface IHorizontalCardProps {
  icon: React.FC;
  children: React.ReactElement;
}
