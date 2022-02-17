import './main.css';


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('./images', false, /\.(gif|png|jpe?g)$/));
  const fonts = importAll(require.context('./fonts', false, /\.(woff|woff2|eot|ttf|svg)$/));