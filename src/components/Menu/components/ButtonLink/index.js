import React from 'react';

function ButtonLink(props) {
    // props => { className: "o que alguem passar", href: "/"}
    console.log(props)
    return (
        <a href="props.href " className={props.className}>
            Novo Vídeo
        </a>
    );
}

export default ButtonLink; 