import React from 'react'
import CardItem from '../../secondary/CardItem/Body'
import './style.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out my Projects</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/logo-fr-tec.png"
                            text="Defiance delivery system"
                            label="logistics"
                            path="projects"
                        />
                        <CardItem
                            src="images/logo-fr-tec.png"
                            text="Defiance delivery system"
                            label="logistics"
                            path="projects"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/logo-fr-tec.png"
                            text="Defiance delivery system"
                            label="logistics"
                            path="projects"
                        />
                        <CardItem
                            src="images/logo-fr-tec.png"
                            text="Defiance delivery system"
                            label="logistics"
                            path="projects"
                        />
                        <CardItem
                            src="images/logo-fr-tec.png"
                            text="Defiance delivery system"
                            label="logistics"
                            path="projects"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
