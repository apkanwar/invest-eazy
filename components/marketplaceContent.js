import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/marketplaceContent.module.css';
import List from './miniComponents/list';
import { FormControl, InputLabel, Select, MenuItem, Autocomplete, TextField, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import PropertyApi from '../api'

const StyledTextBox = styled(TextField)({
  [`& fieldset`]: {
    borderRadius: '24px',
  },
});

const sortOptions = [
  { label: 'Min Investment (High to Low)', value: 1 },
  { label: 'Min Investment (Low to High)', value: 2 },
  { label: 'Closing Date (Farthest First)', value: 3 },
  { label: 'Closing Date (Closest First)', value: 4 }
];

export default function MarketplaceContent() {
  const [housesToShow, setHousesToShow] = useState([]);
  const [selectedSortValue, setSelectedSortValue] = useState('0');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    sortandSearchListings();
  }, [selectedSortValue, searchTerm]);

  const handleSortChange = (event) => {
    setSelectedSortValue(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const sortandSearchListings = () => {
    let pAPI = new PropertyApi().getAll();

    let sortedListings = [];

    switch (selectedSortValue) {
      case 1:
        sortedListings = [...pAPI].sort((a, b) => b.minInvestment - a.minInvestment);
        console.log(sortedListings)
        break;
      case 2:
        sortedListings = [...pAPI].sort((a, b) => a.minInvestment - b.minInvestment);
        console.log(sortedListings)
        break;
      case 3:
        sortedListings = [...pAPI].sort((a, b) => new Date(b.closingDate) - new Date(a.closingDate));
        console.log(sortedListings)
        break;
      case 4:
        sortedListings = [...pAPI].sort((a, b) => new Date(a.closingDate) - new Date(b.closingDate));
        console.log(sortedListings)
        break;
      default:
        sortedListings = [...pAPI].sort((a, b) => a.id - b.id);
        console.log(sortedListings)
        break;
    }

    if (searchTerm != '') {
      setHousesToShow(sortedListings.filter(listing => listing.name.toLowerCase().includes(searchTerm.toLowerCase())));
    }
    else {
      setHousesToShow(sortedListings);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Marketplace
      </div>

      <div className={styles.sort}>
        <Autocomplete sx={{ minWidth: '80%', paddingRight: '1em' }}
          id="Search"
          freeSolo
          options={housesToShow.map((option) => option.name)}
          renderInput={(params) => <StyledTextBox {...params}
            label="Search (By Name)"
            sx={{ borderRadius: '24px', backgroundColor: 'white' }}
            onChange={handleSearch}
            value={searchTerm}
          />}
        />

        <FormControl sx={{ minWidth: '20%' }}>
          <InputLabel id="sort-label">Sort</InputLabel>
          <Select
            labelId="sort-label"
            sx={{ borderRadius: '24px', backgroundColor: 'white' }}
            label="Sort"
            value={selectedSortValue}
            onChange={handleSortChange}
          >
            <MenuItem value='0'>
              <em>None</em>
            </MenuItem>
            {sortOptions.map((sortOption) => (
              <MenuItem key={sortOption.value} value={sortOption.value}>
                {sortOption.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className={styles.portfolioContainer}>
        <div className={styles.header}>
          <div>
            Closing (days)
          </div>
          <div>
            Type
          </div>
          <div>
            Timeline (years)
          </div>
          <div>
            Min Investment
          </div>
          <div className={styles.lastHeader}>
            Funding Completed
          </div>
        </div>
        <div className={styles.list}>
          {housesToShow.map(listing => (
            <Link key={listing.id} href={`/properties/${listing.id}`}>
              <List item={listing} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}