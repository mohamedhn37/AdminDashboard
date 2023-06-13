import React, { useState } from 'react'
import { FaPenAlt, FaPlusSquare, FaTrashAlt, FaUserFriends } from 'react-icons/fa';


const Candidats = () => {

  const [showAddCandidat, setShowAddCandidat] = useState(false);
  const toggleAddCandidat = () => {
    setShowAddCandidat(!showAddCandidat);
  };
  const [showTotaleCandidats, setShowTotaleCandidats] = useState(true);
  const toggleTotaleCandidats = () => {
    setShowTotaleCandidats(!showTotaleCandidats);
  };
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="dashNavigate text-primary" onClick={toggleAddCandidat}>
              <FaPlusSquare className='fs-1 me-4' />
              <h4 className='mb-0'>Ajouter/Modifier les infos</h4>
            </div>
            {showAddCandidat && (
              <div className="UserFormations mb-4">
                <form className='FormationForm'>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="form-group mt-3">
                        <label for="Civilité" className="form-label">Civilité<span className="text-danger">*</span></label>
                        <select id="Civilité" name="Civilité" title="Civilité" className="form-select">
                          <option value="Civilité">Civilité</option>
                          <option value="Homme">Homme</option>
                          <option value="Femme">Femme</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group mt-3">
                        <label for="nom" className="form-label">Nom<span className="text-danger">*</span></label>
                        <input type="text" id="nom" required className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group mt-3">
                        <label for="Prénom" className="form-label">Prénom<span className="text-danger">*</span></label>
                        <input type="text" id="Prénom" required className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group mt-3">
                        <label for="email" className="form-label">Email<span className="text-danger">*</span></label>
                        <input type="email" id="email" required className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group mt-3">
                        <label for="Adresse" className="form-label">Adresse<span className="text-danger">*</span></label>
                        <input type="text" id="Adresse" required className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group mt-3">
                        <label for="phone" className="form-label">Téléphone<span className="text-danger">*</span></label>
                        <input type="text" id="phone" required className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group mt-3">
                        <label for="password" className="form-label">Mot de passe<span className="text-danger">*</span></label>
                        <input type="password" id="password" required className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group mt-3">
                        <label for="passwordConfirme" className="form-label">Confirmer Mot de passe<span className="text-danger">*</span></label>
                        <input type="password" id="passwordConfirme" required className="form-control" />
                      </div>
                    </div>
                    <button className='btn btn-primary m-4 w-auto'>Enregistrer</button>
                  </div>
                </form>
              </div>
            )}
          </div>
          <div className="col-md-12">
            <div className="dashNavigate text-success" onClick={toggleTotaleCandidats}>
              <FaUserFriends className='fs-1 me-4' />
              <h4 className='mb-0'>Totale candidats</h4>
            </div>
            {showTotaleCandidats && (
              <div className="UserFormations">
                <div className="offreInfos table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Suivi Condidat</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><span>Jhon</span></td>
                        <td><span>doe</span></td>
                        <td><span>Jhon.doe@gmail.com</span></td>
                        <td><span>0600000000</span></td>
                        <td>
                          <button className='btn btn-dark me-3' title='Modifier'><FaPenAlt className='text-warning' /></button>
                          <button className='btn btn-dark' title='Supprimer'><FaTrashAlt className='text-danger' /></button>
                        </td>
                      </tr>
                      <tr>
                        <td><span>Jhon</span></td>
                        <td><span>doe</span></td>
                        <td><span>Jhon.doe@gmail.com</span></td>
                        <td><span>0600000000</span></td>
                        <td>
                          <button className='btn btn-dark me-3' title='Modifier'><FaPenAlt className='text-warning' /></button>
                          <button className='btn btn-dark' title='Supprimer'><FaTrashAlt className='text-danger' /></button>
                        </td>
                      </tr>
                      <tr>
                        <td><span>Jhon</span></td>
                        <td><span>doe</span></td>
                        <td><span>Jhon.doe@gmail.com</span></td>
                        <td><span>0600000000</span></td>
                        <td>
                          <button className='btn btn-dark me-3' title='Modifier'><FaPenAlt className='text-warning' /></button>
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

export default Candidats