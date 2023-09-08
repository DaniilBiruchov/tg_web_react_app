import React from 'react';

const ProductList = () => {
    return (
      <div>
        P<h3>Введите ваши данные</h3>
        <input
          type="text"
          placeholder="Введите страну"
        />
        <input
          type="text"
          placeholder="Введите город"
        />
        <select>
          <option value={'physical'}>Физ.лицо</option>
          <option value={'legal'}>Юр.лицо</option>
        </select>
      </div>
    );
};

export default ProductList;