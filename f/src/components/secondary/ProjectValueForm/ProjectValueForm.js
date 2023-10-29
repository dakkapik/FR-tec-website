import React, { createRef } from 'react'
import { useScreenshot, createFileName } from 'use-react-screenshot'
import Switch from '../../util/Switch/Switch'
import './style.css'
import { UtilButton } from '../../util/Button/Body';

export default () => {
    const ref = createRef(null)

    const [image, takeScreenshot] = useScreenshot({
        type: "image/jpeg",
        quality: 1.0
    })


    const download = (image, { name = "img", extension = "jpg" } = {}) => {
        const a = document.createElement("a");
        a.href = image;
        a.download = createFileName(extension, name);
        a.click();
    }
    
    const downloadScreenshot = () => takeScreenshot(ref.current).then(download);

    // const handleSubmit = (event) =>  {
    //     alert("thank you for your message " + userName +", I will reply as soon as possible");
    //     event.preventDefault();
    // }

    const fields = [
        ["CUSTOMER"],
        ["1. identifiable", "Defined core customer", "Undefined customer"],
        ["2. demographics", "clearly defined and focused", "fuzzy definition and unfocused"],
        ["3. psychographics", "clearly defined and focused", "fuzzy definition and unfocused"],
        ["TRENDS"],
        ["4. macro market", "multiple and converging", "few and disparate"],
        ["5. target market", "multiple and converging", "few and disparate"],
        ["6. window of opportunity", "opening", "closing"],
        ["7. market structure", "emerging/ fragmented", "mature/decline"],
        ['MARKET SIZE'],
        ["8. how many", "large core customer group", "small unclear customer groups"],
        ["9. demand", "greater than supply", "less than supply"],
        ['MARKET GROWTH'],
        ["10. rate", "20% or greater", "less than 20%"],
        ["PRICE/ FREQUENCY/ VALUE"],
        ["11. price", "gross margin greater 40%", "gross margin lesser than 40%"],
        ["12. frequency", "often and repeated", "one time"],
        ["13. value", "fully reflected in price", "penetration pricing"],
        ["14. operating expenses", "low and variable", "large and fixed"],
        ["15. net profit margin", "greater than 10%", "lesser than 10%"],
        ["16. volume", "very high", "moderate"],
        ['DISTRIBUTION'],
        ["17. where are you in value chain", "high margin, high power", "low margin, low power"],
        ["COMPETITION"],
        ["18. market structure", "emerging", "mature"],
        ["19. number of direct competitors", "few", "many"],
        ["20. number of indirect competitors", "few", "many"],
        ["21. number of substitutes", "few", "many"],
        ["22. steath competitors", "unlikely", "likely"],
        ["23. strength of competitors", "weak", "strong"],
        ['KEY SUCCESS FACTORS'],
        ["24. relative position", "strong", "weak"],
        ['VENDORS'],
        ["25. relative power", "weak", "strong"],
        ["26. gross margins they control in value chain", "low", "high"],
        ['GOVERNMENT'],
        ["27. regulations", "low", "high"],
        ["28. taxes", "low", "high"],
        ['GLOBAL ENVIRONMENT'],
        ["29. customers", "interested and accessible", "not interested or accessible"],
        ["30. competitors", "nonexistent or weak", "existing and strong"],
        ["31. vendors", "eager", "unavaliable"]
    ]



    // const titles = [
    //     {title: "customer", fields: 3, answer:[]}, 
    //     {title: "trends", fields: 4, answer:[]}, 
    //     {title: "market size", fields: 2, answer:[]}, 
    //     {title: "market growth", fields: 1, answer:[]}, 
    //     {title: "price/frequency/value", fields: 6, answer:[]}, 
    //     {title: "distribution", fields: 1, answer:[]}, 
    //     {title: "competition", fields: 6, answer:[]}, 
    //     {title: "key success factors", fields: 1, answer:[]}, 
    //     {title: "vendors", fields: 2, answer:[]}, 
    //     {title: "government", fields: 2, answer:[]}, 
    //     {title: "global envirnment", fields: 3, answer:[]}, 
    // ]

    const listItems = fields.map((field, index) => <Switch title={field[0]} pos={field[1]} neg={field[2]} key={index}/>)

    return (
        <div className='project-value-container'>
            <p className='project-value-heading'>
                Project Value Checklist
            </p>
            <div className='project-input-areas' ref={ref}>
                <form className='input-form' action='http://localhost:8080/message' method='POST' 
                // onSubmit={handleSubmit}
                >
                    {listItems}
                </form>
            </div>
            <UtilButton buttonStyle='btn--outline' onClick={downloadScreenshot}>Download</UtilButton>
        </div>
    )
}
