import React from 'react';
import Select from 'react-select';

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '4px',
        minHeight: '38px',
        height: '38px',
        margin: '5px',
        boxShadow: state.isFocused ? '0 0 0 1px rgba(0, 0, 0, 0.1)' : null,
        '&:hover': {
            borderColor: '#aaa',
        },
    }),
    valueContainer: (provided, state) => ({
        ...provided,
        padding: '0 6px',
    }),
    input: (provided, state) => ({
        ...provided,
        margin: '0px',
    }),
    indicatorsContainer: (provided, state) => ({
        ...provided,
        height: '38px',
    }),
};

const SearchBox = ({ options, placeholder, onChange, value, isMulti }) => {

    return (
        <Select
            options={options}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            isMulti={isMulti}
            styles={customStyles}
            isSearchable
        />
    );
};

const SearchBar = ({ searchFields }) => {
    return (
        <div style={{
            display: 'flex',
        }}>
            {
                searchFields.map((field, index) => (
                    <SearchBox
                        key={index}
                        options={field.options}
                        placeholder={field.placeholder}
                        onChange={(option) => field.onChange(option)}
                        isMulti={field.isMulti}
                    />
                ))
            }
        </div>
    );
};

export default SearchBar;