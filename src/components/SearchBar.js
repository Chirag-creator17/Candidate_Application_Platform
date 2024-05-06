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

const SearchBoxDropDown = ({ options, placeholder, onChange, value, isMulti }) => {
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

const SearchBoxText = ({ placeholder, onChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            style={
                {
                    height: '38px',
                    borderColor: 'hsl(0, 0%, 80%)',
                    borderRadius: '4px',
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    boxSizing: 'border-box',
                    border: '1px solid #ccc'
                }
            }
        />
    );
};

const SearchBar = ({ searchFields }) => {
    return (
        <div style={{
            display: 'flex',
            flexWrap:'wrap',
            // gridTemplateColumns: 'repeat(6, minmax(150px, 1fr))',
            gap: '10px',
            alignContent: 'flex-start',
            // alignItems: 'inherit',
            margin: '0px 160px 10px 0px',
        }}>
            {
                searchFields.map((field, index) =>
                    field.type === 'select' ?
                        (
                            <SearchBoxDropDown
                                key={index}
                                options={field.options}
                                placeholder={field.placeholder}
                                onChange={(option) => field.onChange(option)}
                                isMulti={field.isMulti}
                            />
                        )
                        : (
                            <SearchBoxText
                                key={index}
                                placeholder={field.placeholder}
                                onChange={(value) => field.onChange(value)}
                            />
                        )
                )
            }
        </div>
    );
};

export default SearchBar;