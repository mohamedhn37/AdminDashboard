import React, { useState } from 'react'
import './Sociétés.css'
import { FaBuilding, FaEnvelope, FaTimes, FaTrashAlt } from 'react-icons/fa'

const Sociétés = () => {

  const [showTotaleSociétés, setShowTotaleSociétés] = useState(true);
  const toggleTotaleSociétés = () => {
    setShowTotaleSociétés(!showTotaleSociétés);
  };

  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
        <div className="col-md-12">
            <div className="dashNavigate text-success" onClick={toggleTotaleSociétés}>
              <FaBuilding className='fs-1 me-4' />
              <h4 className='mb-0'>Totale Sociétés</h4>
            </div>
            {showTotaleSociétés && (
              <div className="UserFormations">
                <div className="offreInfos table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Nom de société</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Suivi Société</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span>CMP1</span></td>
                        <td><span>CMP1.CMP1@gmail.com</span></td>
                        <td><span>0600000000</span></td>
                        <td>
                          <button className='btn btn-dark' title='Supprimer'><FaTrashAlt className='text-danger' /></button>                     
                          <button className='btn btn-dark ms-3' title='Contacter' onClick={togglePopup}><FaEnvelope className='text-warning' /></button>                     
                          {isPopupVisible && (
                          <div className="popup">
                            <span className="close" onClick={togglePopup}><FaTimes/></span>
                            <div className="infosCondidatContent">
                              <h3 className='mb-4'>Message</h3>
                              <textarea name="Message" id="Message" className="form-control" required rows={5}></textarea>
                              <button class="btn btn-primary my-3">Envoyer</button>
                            </div>
                          </div>
                        )}
                        </td>
                      </tr>
                      <tr>
                        <td><span>CMP2</span></td>
                        <td><span>CMP2.CMP2@gmail.com</span></td>
                        <td><span>0600000000</span></td>
                        <td>
                          <button className='btn btn-dark' title='Supprimer'><FaTrashAlt className='text-danger' /></button>                     
                          <button className='btn btn-dark ms-3' title='Contacter' onClick={togglePopup}><FaEnvelope className='text-warning' /></button>                     
                          {isPopupVisible && (
                          <div className="popup">
                            <span className="close" onClick={togglePopup}><FaTimes/></span>
                            <div className="infosCondidatContent">
                              <h3 className='mb-4'>Message</h3>
                              <textarea name="Message" id="Message" className="form-control" required rows={5}></textarea>
                              <button class="btn btn-primary my-3">Envoyer</button>
                            </div>
                          </div>
                        )}
                        </td>
                      </tr>
                      <tr>
                        <td><span>CMP3</span></td>
                        <td><span>CMP3.CMP3@gmail.com</span></td>
                        <td><span>0600000000</span></td>
                        <td>
                          <button className='btn btn-dark' title='Supprimer'><FaTrashAlt className='text-danger' /></button>                     
                          <button className='btn btn-dark ms-3' title='Contacter' onClick={togglePopup}><FaEnvelope className='text-warning' /></button>                     
                          {isPopupVisible && (
                          <div className="popup">
                            <span className="close" onClick={togglePopup}><FaTimes/></span>
                            <div className="infosCondidatContent">
                              <h3 className='mb-4'>Message</h3>
                              <textarea name="Message" id="Message" className="form-control" required rows={5}></textarea>
                              <button class="btn btn-primary my-3">Envoyer</button>
                            </div>
                          </div>
                        )}
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

export default Sociétés