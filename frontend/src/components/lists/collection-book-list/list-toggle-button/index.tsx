import Icon from '@/components/icon'
import styles from './index.module.scss'

import { Dispatch, SetStateAction } from 'react';

type Props = {
  listSelector: "list" | "grid";
  setListSelector: Dispatch<SetStateAction<"list" | "grid">>;
};

export default function ListToggleButton({ listSelector, setListSelector }: Props) {
  return (
    <div className={styles.toggleButtons}>
      <button className={`${listSelector === "list" ? styles.active : ""}`} onClick={() => { setListSelector('list') }}>
        <Icon name='list' />
      </button>
      <button className={`${listSelector === "grid" ? styles.active : ""}`} onClick={() => { setListSelector('grid') }}>
        <Icon name='grid_view' />
      </button>
    </div>
  )
}