import SearchBar from "./components/SearchBar"

const SearchField = (searchParams) => {

    const search = {
        type: searchParams.type || 'text',
        options: searchParams.options || [],
        placeholder: searchParams.placeholder || '',
        isMulti: searchParams.isMulti || false,
        onChange: searchParams.onChange || ((option) => { }),
    }

    return search
}

const Filter = (filterParams) => {

    const filter = {
        option: filterParams.option,
        filterType: filterParams.filterType || 'single',
        onFilter: filterParams.onFilter
    }

    return filter
}

const ExperienceSearch = ({ onSelect }) => {
    const options = [
        { value: 1, label: '0-1 year' },
        { value: 2, label: '2+ years' },
        { value: 3, label: '3+ years' },
    ]

    const onChange = (option) => {
        const filter = Filter({ option: option, filterType: 'experience', onFilter: filterJobs })
        onSelect && onSelect(filter)
    }

    const filterJobs = (data, option) => {
        const minExp = data.minExp || 0

        if (option.value == 1) return minExp <= option.value
        else return minExp >= option.value
    }

    const placeholder = 'Experience'

    return SearchField({
        type: 'select',
        options: options,
        placeholder: placeholder,
        isMulti: true,
        onChange: onChange,
    })

}

const RoleSearch = ({ onSelect }) => {
    const options = [
        { value: 'frontend', label: 'Frontend' },
        { value: 'backend', label: 'Backend' },
        { value: 'fullstack', label: 'Fullstack' },
    ]

    const onChange = (option) => {
        const filter = Filter({ option: option, filterType: 'role', onFilter: filterJobs })
        onSelect && onSelect(filter)
    }

    const filterJobs = (data, option) => {
        const currRole = (data.jobRole || '').toLowerCase()
        return currRole.includes(option.value)
    }

    const placeholder = 'Role'

    return SearchField(
        {
            type: 'select',
            options: options,
            isMulti: true,
            placeholder: placeholder,
            onChange: onChange,
        }
    )
}

const LocationSearch = ({ onSelect }) => {
    const options = [
        { value: 'remote', label: 'Remote' },
        { value: 'hybrid', label: 'Hybrid' },
        { value: 'in-office', label: 'On-site' },
    ]

    const onChange = (option) => {
        const filter = Filter({ option: option, filterType: 'location', onFilter: filterJobs })
        onSelect && onSelect(filter)
    }

    const filterJobs = (data, option) => {
        const locations = (data.location || '').toLowerCase()

        if (option.value === 'remote' || option.value === 'hybrid')
            return locations.includes(option.value)
        else
            return !locations.includes('remote') && !locations.includes('hybrid')
    }

    return SearchField(
        {
            type: 'select',
            options: options,
            isMulti: true,
            placeholder: 'Location',
            onChange: onChange,
        }
    )
}

const NumberOfEmployeesSearch = ({ onSelect }) => {
    const options = [
        { value: '1-10', label: '1-10' },
        { value: '11-50', label: '11-50' },
        { value: '51-100', label: '51-100' },
    ]

    const onChange = (option) => {
        const filter = Filter({
            option: option,
            filterType: 'numEmp',
            onFilter: filterJobs
        })
        onSelect && onSelect(filter)
    }

    const filterJobs = (data, option) => {
        // todo : This field is not provided by the api
        return true
    }

    return SearchField(
        {
            type: 'select',
            options: options,
            isMulti: true,
            placeholder: 'Number of Employees',
            onChange: onChange,
        }
    )
}

const TechStackSearch = ({ onSelect }) => {
    const options = [
        { value: 'react', label: 'React' },
        { value: 'angular', label: 'Angular' },
        { value: 'vue', label: 'Vue' },
    ]

    const onChange = (option) => {
        const filter = Filter({
            option: option,
            filterType: 'techStack',
            onFilter: filterJobs
        })
        onSelect && onSelect(filter)
    }

    const filterJobs = (data, option) => {
        // todo : This field is not provided by the api
        return true
    }

    return SearchField(
        {
            type: 'select',
            options: options,
            isMulti: true,
            placeholder: 'Tech Stack',
            onChange: onChange,
        }
    )
}

const SalarySearch = ({ onSelect }) => {
    const options = [
        { value: 0, label: '0L' },
        { value: 10, label: '10L' },
        { value: 20, label: '20L' },
    ]

    const onChange = (option) => {
        const filter = Filter({
            option: option,
            filterType: 'salary',
            onFilter: filterJobs
        })
        onSelect && onSelect(filter)
    }

    const filterJobs = (data, option) => {
        const minSalary = data.minJdSalary || 0
        const maxSalary = data.maxJdSalary || 9999999

        const salary = option.value
        return minSalary <= salary && salary <= maxSalary
    }

    return SearchField(
        {
            type: 'select',
            options: options,
            isMulti: true,
            placeholder: 'Salary',
            onChange: onChange,
        }
    )
}


const CompanySearch = ({ onSelect }) => {

    const filterJobs = (data, searchQry) => {
        const company = (data.companyName || '').toLowerCase()
        return company.includes(searchQry.toLowerCase())
    }

    return SearchField(
        {
            type: 'text',
            placeholder: 'Search Company',
            onChange: (searchQry) => {
                const filter = Filter({
                    option: searchQry,
                    filterType: 'company',
                    onFilter: filterJobs
                })
                onSelect && onSelect(filter)
            }
        }
    )


}

const JobSearchBar = (onSelect) => {

    const expSearch = ExperienceSearch(onSelect)
    const roleSearch = RoleSearch(onSelect)
    const locationSearch = LocationSearch(onSelect)
    const numEmpSearch = NumberOfEmployeesSearch(onSelect)
    const techStackSearch = TechStackSearch(onSelect)
    const salarySearch = SalarySearch(onSelect)
    const companySearch = CompanySearch(onSelect)
    
    const jobSearchFields = [expSearch, roleSearch, locationSearch, numEmpSearch, techStackSearch, salarySearch, companySearch]

    return (
        <div style={{ display: 'inline-flex', justifyContent: 'flex-start' }}>
            <SearchBar searchFields={jobSearchFields} />
        </div>
    )
}

export default JobSearchBar;