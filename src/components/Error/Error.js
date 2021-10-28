import React from 'react'
import { Container } from 'react-bootstrap';

const Error = () => {
    return (
        <div className="p-5">
            <h1>Ville introuvable </h1>
            <p>Peut-être que la ville que vous recherchez n'est pas disponible sur notre site</p>
            <p>Vérifier et essayer avec une autre valide :)</p>
            <p>Si cela ne fonctionne pas encore, alors nous sommes désolés, il semble que nous ayons atteint le taux d'appel limité par jour</p>
        </div>
    )
}

export default Error
