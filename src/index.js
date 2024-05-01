// import './css/style.css';
// import './js/app';

export default function health(obj) {
    let retu = 'critical';
    if (obj.health > 50) {
      retu = 'healthy';
    } if (obj.health <= 50 && obj.health >= 15) {
      retu = 'wounded';
    } if (obj.health < 15) {
      retu = 'critical';
    }
    return retu;
  }