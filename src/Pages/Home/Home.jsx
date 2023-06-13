import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBriefcase, FaBuilding, FaUsers } from 'react-icons/fa';
import Chart from 'chart.js/auto';
import './Home.css';

const Home = () => {
  const chartRef = useRef(null);
  let chartInstance = null; // Stocker l'instance du graphique

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chartElement = chartRef.current.getContext('2d');

      if (chartInstance) {
        // Détruire le graphique existant si une instance existe
        chartInstance.destroy();
      }

      const chartConfig = {
        type: 'bar',
        data: {
          labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin'],
          datasets: [
            {
              label: 'Candidats',
              data: [50, 70, 90, 100, 100, 100],
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
            },
            {
              label: 'Offres',
              data: [80, 100, 60, 110, 70, 90],
              backgroundColor: 'rgba(255, 0, 0, 0.6)',
            },
            {
              label: 'Sociétés',
              data: [30, 40, 50, 60, 70, 80],
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              stacked: false,
            },
            y: {
              stacked: false,
            },
          },
        },
      };

      chartInstance = new Chart(chartElement, chartConfig);
    }

    // Nettoyer le graphique lors du démontage du composant
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <div className="DashHome px-4">
            <div className="row my-6">
              <div className="col-md-12">
                <h3 className="my-4">Bonjour Admin</h3>
              </div>
              <div className="col-md-4">
                <NavLink to="/Candidats" className="text-decoration-none">
                  <div className="dashNavigate text-primary">
                    <div>
                      <FaUsers className="fs-1" />
                      <h4 className="mb-0">Total Candidats</h4>
                      <span>100</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-4">
                <NavLink to="/Offres" className="text-decoration-none">
                  <div className="dashNavigate text-danger">
                    <div>
                      <FaBriefcase className="fs-1" />
                      <h4 className="mb-0">Total Offres</h4>
                      <span>90</span>
                    </div>
                  </div>
                </NavLink>
              </div>
              <div className="col-md-4">
                <NavLink to="/Sociétés" className="text-decoration-none">
                  <div className="dashNavigate text-success">
                    <div>
                      <FaBuilding className="fs-1" />
                      <h4 className="mb-0">Total Sociétés</h4>
                      <span>80</span>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="chartContainer my-5">
                  <canvas ref={chartRef} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
