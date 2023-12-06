/* eslint-disable import/no-unresolved */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const shapes = { round: 'rounded-[5px]' };
const sizes = { xs: 'p-[18px]', sm: 'pb-[17px] pl-[17px] pr-3 pt-[19px]' };

const SelectBox = React.forwardRef(
  (
    {
      children,
      placeholder,
      className,
      options,
      isSearchable,
      placeholderClassName,
      isMulti,
      onChange,
      value,
      errors,
      indicator,
      shape,
      size,
      ...restProps
    },
    ref,
  ) => {
    const [selectedVal, setSelectedVal] = React.useState(value);

    const handleChange = (data) => {
      setSelectedVal(data);
      if (isMulti) {
        onChange?.(data?.map((d) => d.value) || []);
      } else {
        onChange?.(data?.value);
      }
    };

    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} ${(shape && shapes[shape]) || ''} ${
            (size && sizes[size]) || ''
          } bg-white-A700 text-black-900`}
          placeholder={
            <div className={placeholderClassName}>{placeholder}</div>
          }
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          value={selectedVal}
          onChange={handleChange}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: 'transparent',
              border: '0 !important',
              boxShadow: '0 !important',
              minHeight: 'auto',
              '&:hover': {
                border: '0 !important',
              },
            }),
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected && '#fafafa',
              backgroundColor: state.isSelected && '#606c38',
              '&:hover': { backgroundColor: '#606c38', color: '#ffffff' },
            }),
            singleValue: (provided) => ({
              ...provided,
              color: 'inherit',
            }),
            input: (provided) => ({
              ...provided,
              color: 'inherit',
              margin: '0',
              padding: '0',
              // height: "0",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: '0',
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              paddingTop: '0px',
              paddingBottom: '0px',
            }),
            clearIndicator: (provided) => ({
              ...provided,
              padding: '0',
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              padding: '0',
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
            placeholder: (base) => ({
              ...base,
              margin: 0,
            }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === 'scrollContainer';
          }}
          {...restProps}
        />
        {children}
      </>
    );
  },
);

SelectBox.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  placeholderClassName: PropTypes.string,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
  shape: PropTypes.oneOf(['round']),
  size: PropTypes.oneOf(['xs', 'sm']),
};

SelectBox.defaultProps = {
  placeholder: 'Select',
  className: '',
  isSearchable: false,
  placeholderClassName: '',
  isMulti: false,
  value: '',
  shape: '',
  size: 'xs',
  options: [],
  onChange: () => {},
};
export { SelectBox };
