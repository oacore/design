#### Select with dynamic options (icons included)

```jsx
    import Select from './index'
    import Icon from '../../elements/icon'

    const options = [
      {id: 1, icon: '#magnify', value: 'Option A' },
      {id: 2, icon: '#magnify', value: 'Option B' },
      {id: 3, icon: '#magnify', value: 'Option C' },
      {id: 4, icon: '#magnify', value: 'Option D' },
      {id: 5, icon: '#magnify', value: 'Option E' },
      {id: 6, icon: '#magnify', value: 'Option F' },
      {id: 7, value: 'Option G (without icon)' },

    ]

    const SelectExample = () => {
        const [value, setValue] = React.useState('Default option')
        const [suggestions, setSuggestions] = React.useState([])
        
        // select event handlers
        const handleOptionSelected = (id) => {
          setValue(options.find(el => el.id === id).value)
        }
        const handleInputChange = (value) => {
          setSuggestions(options.slice(0, Math.max(0, options.length - value.length)))
          setValue(value)
        }

        return (
          <div style={{minHeight: '500px'}}>
            <Select
              id="select"
              value={value}
              onOptionSelected={handleOptionSelected}
              onInputChange={handleInputChange}
              placeholder="e.g. article title or author name"
              prependIcon="#magnify"
            >
                {suggestions.map((el) => (
                  <Select.Option
                    key={el.id}
                    id={el.id}
                    value={el.value}
                    icon={el.icon}
                  >
                    {el.value}
                  </Select.Option>
                ))}
            </Select>
          </div>
        )
    }
    <SelectExample />
```

#### Select with dynamic options (icons included)

```jsx
    import Select from './index'
    import Icon from '../../elements/icon'

    const options = [
      {id: 1, value: 'Option A' },
      {id: 2, value: 'Option B' },
      {id: 3, value: 'Option C' },
      {id: 4, value: 'Option D' },
      {id: 5, value: 'Option E' },
      {id: 6, value: 'Option F' },
      {id: 7, icon: '#magnify', value: 'Option G (with icon)' },

    ]

    const SelectExample = () => {
        const [value, setValue] = React.useState('Default option')
        const [suggestions, setSuggestions] = React.useState([])
        
        // select event handlers
        const handleOptionSelected = (id) => {
          setValue(options.find(el => el.id === id).value)
        }
        const handleInputChange = (value) => {
          setSuggestions(options.slice(0, Math.max(0, options.length - value.length)))
          setValue(value)
        }

        return (
          <div style={{minHeight: '500px'}}>
            <Select
              id="select"
              value={value}
              onOptionSelected={handleOptionSelected}
              onInputChange={handleInputChange}
              placeholder="e.g. article title or author name"
            >
                {suggestions.map((el) => (
                  <Select.Option
                    key={el.id}
                    id={el.id}
                    value={el.value}
                    icon={el.icon}
                  >
                    {el.value}
                  </Select.Option>
                ))}
            </Select>
          </div>
        )
    }
    <SelectExample />
```
