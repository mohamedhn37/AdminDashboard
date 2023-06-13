import React from 'react'
import './Setting.css'

const Setting = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 my-4">
            <h3 className='mb-3'>Gestion de mon compte et de mes données de connexion</h3>
            <div className="UserFormations">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group mt-3">
                    <label htmlFor="email" className='form-label'>Email<span className='text-danger'>*</span></label>
                    <input type='email' id="Phone" required className="form-control" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mt-3">
                    <label htmlFor="MotDePasseAct" className='form-label'>Votre mot de passe actuel<span className='text-danger'>*</span></label>
                    <input type='password' id="MotDePasseAct" placeholder="Renseignez ici votre mot de passe actuel" required className="form-control p-3" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mt-3">
                    <label htmlFor="MotPassNouveau" className='form-label'>Votre nouveau mot de passe<span className='text-danger'>*</span></label>
                    <input type='password' id="MotPassNouveau" required placeholder="Renseignez ici votre nouveau mot de passe actuel" className="form-control p-3" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mt-3">
                    <label htmlFor="MotPassConfirme" className='form-label'>Confirmer votre nouveau mot de passe <span className='text-danger'>*</span></label>
                    <input type='password' id="MotPassConfirme" required placeholder='Renseignez encore votre nouveau mot de passe pour le confirmer' className="form-control p-3" />
                  </div>
                </div>
                <button className='btn btn-primary w-auto m-4'>Valider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Setting
