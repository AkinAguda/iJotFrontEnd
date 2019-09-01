import React from 'react';
import { ShellTypeProps } from '../../interfaces';
import Footer from '../Footer';
import Tile from '../Tile';
import Edit from '../Edit';
import Header from '../Header';
import Styles from './index.module.css';

const Shell: React.FC<ShellTypeProps> = ({
  notes,
  edit,
}: ShellTypeProps): JSX.Element => (
  <div className={Styles.container}>
    <main>
      <Header />
      <h1 className={Styles.title}>Notes</h1>
      <div className={Styles.content}>
        {notes && (
          <>
            <Tile />
            <Tile />
          </>
        )}
        {edit && <Edit />}
      </div>
    </main>
    <Footer />
  </div>
);

export default Shell;
