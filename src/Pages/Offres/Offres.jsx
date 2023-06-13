import React, { useState } from 'react'
import './Offres.css'
import { FaBoxes, FaTrashAlt } from 'react-icons/fa'

const Offres = () => {

    const [showTotaleOffres, setShowTotaleOffres] = useState(true);
    const toggleTotaleOffres = () => {
        setShowTotaleOffres(!showTotaleOffres);
    };

    return (
        <>
            <div className="container my-5">
        <div className="row">
        <div className="col-md-12">
            <div className="dashNavigate text-danger" onClick={toggleTotaleOffres}>
              <FaBoxes className='fs-1 me-4' />
              <h4 className='mb-0'>Totale Offres</h4>
            </div>
            {showTotaleOffres && (
              <div className="UserFormations">
                <div className="offreInfos table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Titre d'offre</th>
                        <th>Proposer par</th>
                        <th>Type</th>
                        <th>Date de publication</th>
                        <th>Suivi l'offre</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span>Développeur Front-End</span></td>
                        <td><span>CMP2</span></td>
                        <td><span>CDD</span></td>
                        <td><span>05-06-2023</span></td>
                        <td>
                          <button className='btn btn-dark' title='Supprimer'><FaTrashAlt className='text-danger' /></button>
                        </td>
                      </tr>
                      <tr>
                        <td><span>Aide Comptable</span></td>
                        <td><span>CMP3</span></td>
                        <td><span>Stage</span></td>
                        <td><span>10-06-2023</span></td>
                        <td>
                          <button className='btn btn-dark' title='Supprimer'><FaTrashAlt className='text-danger' /></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
        </>
    )
}

export default Offres