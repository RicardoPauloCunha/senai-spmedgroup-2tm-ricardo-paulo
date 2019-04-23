import React, { Component } from "react";

import ButtonLogout from "./buttonLogout";

import "../_assets/css/style.css";
import iconLogo from "../_assets/img/icon-logo.png";

class MenuMin extends Component {
    render() {
        return (
            <div class="style__menu--container">
                <div class="style__menu--background">
                    <div class="style__menu">
                        <div class="style__menu--nav">
                            <div class="style__menu--nav-button">
                                <button type="submit" class="style__button--white style__menu--button-display-none">Menu</button>
                            </div>

                            <div class="style__logo--circtittle">
                                <div class="style__logo--circulo">
                                    <img src={iconLogo} alt="" />
                                </div>
                                <h1 class="style__nav--display-none">Sp Medical Group</h1>
                            </div>
                            
                            <ButtonLogout />
                        </div>

                        <div class="style__nav style__nav--display-none style__nav--padding">
                            <div class="style__nav--links">
                                <p>Home</p>
                                <p>Consultas</p>
                                <p>Agendamentos</p>
                                <p>Fale Conosco</p>
                            </div>
                            <div class="style__menu--linha-white style__menu--linha-padding"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuMin;