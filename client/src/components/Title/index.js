import React from "react";
import { node, string } from "prop-types";
import "./styles.scss";

const Title = ({ title, icon }) => {
    return (
        <div className="container-title">
            <span>{title}</span>
            { icon }
        </div>
    );
}

Title.propTypes = {
    title: string.isRequired,
    icon: node
}

export default Title;