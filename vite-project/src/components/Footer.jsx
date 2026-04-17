import React from 'react';

function Footer() {
  const data = new Date().toLocaleDateString('pt-BR');
  return (
    <div className="footer">
      <p>Desenvolvido por: José Henrique Nascimento Bessa | Data: {data}</p>
    </div>
  );
}

export default Footer;