import React, { useState } from 'react'
import Switch from '../Switch/Switch'
import './style.css'

export default () => {
    const [userName, setUserName] = useState("")

    const handleSubmit = (event) =>  {
        alert("thank you for your message " + userName +", I will reply as soon as possible");
        event.preventDefault();
    }

    const handleChange = (event) => setUserName(event.target.value)


    const fields = [
        ["CUSTOMER"],
        ["identifiable", "Defined core customer", "Undefined customer"],
        ["demographics", "clearly defined and focused", "fuzzy definition and unfocused"],
        ["psychographics", "clearly defined and focused", "fuzzy definition and unfocused"],
        ["TRENDS"],
        ["macro market", "multiple and converging", "few and disparate"],
        ["target market", "multiple and converging", "few and disparate"],
        ["window of opportunity", "opening", "closing"],
        ["market structure", "emerging/fragmented", "mature/decline"],
        ['MARKET SIZE'],
        ["how many", "large core customer group", "small unclear customer groups"],
        ["demand", "greater than supply", "less than supply"],
        ['MARKET GROWTH'],
        ["rate", "20% or greater", "less than 20%"],
        ["PRICE/ FREQUENCY/ VALUE"],
        ["price", "gross margin > 40%", "gross margin greater than 40%"],
        ["frequency", "often and repeated", "one time"],
        ["value", "fully reflected in price", "penetration pricing"],
        ["operating expenses", "low and variable", "large and fixed"],
        ["net profit margin", "greater than 10%", "lesser than 10%"],
        ["volume", "very high", "moderate"],
        ['DISTRIBUTION'],
        ["where are you in value chain", "high margin, high power", "low margin, low power"],
        ["COMPETITION"],
        ["market structure", "emerging", "mature"],
        ["number of direct competitors", "few", "many"],
        ["number of indirect competitors", "few", "many"],
        ["number of substitutes", "few", "many"],
        ["steath competitors", "unlikely", "likely"],
        ["strength of competitors", "weak", "strong"],
        ['KEY SUCCESS FACTORS'],
        ["relative position", "strong", "weak"],
        ['VENDORS'],
        ["relative power", "weak", "strong"],
        ["gross margins they control in value chain", "low", "high"],
        ['GOVERNMENT'],
        ["regulations", "low", "high"],
        ["taxes", "low", "high"],
        ['GLOBAL ENVIRONMENT','',''],
        ["customers", "interested and accessible", "not interested or accessible"],
        ["competitors", "nonexistent or weak", "existing and strong"],
        ["vendors", "eager", "unavaliable"]
    ]

    const titles = [
        {title: "customer", fields: 3, answer:[]}, 
        {title: "trends", fields: 4, answer:[]}, 
        {title: "market size", fields: 2, answer:[]}, 
        {title: "market growth", fields: 1, answer:[]}, 
        {title: "price/frequency/value", fields: 6, answer:[]}, 
        {title: "distribution", fields: 1, answer:[]}, 
        {title: "competition", fields: 6, answer:[]}, 
        {title: "key success factors", fields: 1, answer:[]}, 
        {title: "vendors", fields: 2, answer:[]}, 
        {title: "government", fields: 2, answer:[]}, 
        {title: "global envirnment", fields: 3, answer:[]}, 
    ]

    const listItems = fields.map((field, index) => <Switch title={field[0]} pos={field[1]} neg={field[2]} />)

    return (
        <div className='project-value-container'>
            <p className='project-value-heading'>
                Project Value Checklist
            </p>
            <div className='project-input-areas'>
                <form className='input-form' action='http://localhost:8080/message' method='POST' onSubmit={handleSubmit}>
                    {listItems}
                </form>
            </div>
        </div>
    )
}
