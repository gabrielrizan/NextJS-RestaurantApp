import React from 'react';
import Menucard from './Menucard';
import { Item } from '@prisma/client';

const Menu = ({ menu }: { menu: Item[] }) => {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {menu.length ? (
            menu.map((item) => (
              <Menucard key={item.id} item={item} /> // Passing `item` as a prop to Menucard component
            ))
          ) : (
            <p>No items found</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Menu;
