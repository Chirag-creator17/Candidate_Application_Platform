import SearchBar from "./components/SearchBar"

const SearchField = (searchParams) => {

    console.log('searchParams:', searchParams);
    const search = {
        options: searchParams.options || [],
        placeholder: searchParams.placeholder || '',
        isMulti: searchParams.isMulti || false,
        onChange: searchParams.onChange || ((option) => { })

    }

    return search
}

const ExperienceSearch = (onSelect) => {
    const options = [
        { value: '1', label: '1 year' },
        { value: '2', label: '2 years' },
        { value: '3', label: '3+ years' },
    ]

    const onChange = (option) => {
        onSelect && onSelect(option)
        console.log('Selected experience:', option)
    }

    const placeholder = 'Experience'

    return SearchField({
        options: options,
        placeholder: 'Experience',
        isMulti: true,
        onChange: onChange
    })

}

const RoleSearch = (onSelect) => {
    const options = [
        { value: 'frontend', label: 'Frontend' },
        { value: 'backend', label: 'Backend' },
        { value: 'fullstack', label: 'Fullstack' },
    ]

    const onChange = (option) => {
        onSelect && onSelect(option)
        console.log('Selected role:', option)
    }

    return SearchField(
        {
            options: options,
            isMulti: true,
            placeholder: 'Role',
            onChange: onChange
        }
    )
}

const LocationSearch = (onSelect) => {
    const options = [
        { value: 'remote', label: 'Remote' },
        { value: 'hybrid1', label: 'Hybrid' },
        { value: 'in-office', label: 'On-site' },
    ]

    const onChange = (option) => {
        onSelect && onSelect(option)
        console.log('Selected location:', option)
    }

    return SearchField(
        {
            options: options,
            isMulti: true,
            placeholder: 'Location',
            onChange: onChange
        }
    )
}

const NumberOfEmployeesSearch = (onSelect) => {
    const options = [
        { value: '1-10', label: '1-10' },
        { value: '11-50', label: '11-50' },
        { value: '51-100', label: '51-100' },
    ]

    const onChange = (option) => {
        onSelect && onSelect(option)
        console.log('Selected number of employees:', option)
    }

    return SearchField(
        {
            options: options,
            isMulti: true,
            placeholder: 'Number of Employees',
            onChange: onChange
        }
    )
}

const TechStackSearch = (onSelect) => {
    const options = [
        { value: 'react', label: 'React' },
        { value: 'angular', label: 'Angular' },
        { value: 'vue', label: 'Vue' },
    ]

    const onChange = (option) => {
        onSelect && onSelect(option)
        console.log('Selected tech stack:', option)
    }

    return SearchField(
        {
            options: options,
            isMulti: true,
            placeholder: 'Tech Stack',
            onChange: onChange
        }
    )
}

const SalarySearch = (onSelect) => {
    const options = [
        { value: '1lpa', label: '0-50k' },
        { value: '2lpa', label: '50-100k' },
        { value: '100k+', label: '100k+' },
    ]

    const onChange = (option) => {
        onSelect && onSelect(option)
        console.log('Selected salary:', option)
    }

    return SearchField(
        {
            options: options,
            isMulti: true,
            placeholder: 'Salary',
            onChange: onChange
        }
    )
}

const JobSearchBar = () => {

    const expSearch = ExperienceSearch()
    const roleSearch = RoleSearch()
    const locationSearch = LocationSearch()
    const numEmpSearch = NumberOfEmployeesSearch()
    const techStackSearch = TechStackSearch()
    const salarySearch = SalarySearch()

    const jobSearchFields = [expSearch, roleSearch, locationSearch, numEmpSearch, techStackSearch, salarySearch]

    console.log('jobSearchFields:', jobSearchFields);
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <SearchBar searchFields={jobSearchFields} />
        </div>
    )
}

export default JobSearchBar;