// Solar Pumping System Dimensioning Application

// Data for pumps and controllers
const bombasLeao = {
  "4R3": {
    "diametro_poco": "4\"",
    "aplicacao": "Residencial/Agrícola",
    "vazao_min": 0.6,
    "vazao_max": 3.6,
    "altura_max": 354,
    "potencia_max": 4.0,
    "recalque": "1 1/2\" BSP"
  },
  "4R5": {
    "diametro_poco": "4\"", 
    "aplicacao": "Residencial/Agrícola",
    "vazao_min": 1.5,
    "vazao_max": 6.5,
    "altura_max": 354,
    "potencia_max": 8.0,
    "recalque": "1 1/2\" BSP"
  },
  "4R6PB": {
    "diametro_poco": "4\"",
    "aplicacao": "Residencial/Comercial", 
    "vazao_min": 3.0,
    "vazao_max": 8.0,
    "altura_max": 257,
    "potencia_max": 6.0,
    "recalque": "1 1/2\" BSP"
  },
  "4SD": {
    "diametro_poco": "4\"",
    "aplicacao": "Industrial",
    "vazao_min": 7.0,
    "vazao_max": 17.0,
    "altura_max": 181,
    "potencia_max": 10.0,
    "recalque": "2\" BSP"
  },
  "R7A": {
    "diametro_poco": "6\"",
    "aplicacao": "Comercial/Industrial",
    "vazao_min": 3.6,
    "vazao_max": 9.0,
    "altura_max": 443,
    "potencia_max": 14.0,
    "recalque": "1 1/2\" BSP"
  },
  "S30": {
    "diametro_poco": "6\"",
    "aplicacao": "Industrial",
    "vazao_min": 20.0,
    "vazao_max": 50.0,
    "altura_max": 397,
    "potencia_max": 37.5,
    "recalque": "3\" BSP"
  },
  "S65": {
    "diametro_poco": "6\"",
    "aplicacao": "Industrial",
    "vazao_min": 50.0,
    "vazao_max": 90.0,
    "altura_max": 310,
    "potencia_max": 70.0,
    "recalque": "4\" BSP"
  }
};

const controladoresCfw500 = {
  "CFW500A01P6S2NB20H03SD": {
    "alimentacao": "Monofásica 200-240V",
    "corrente_nominal": 1.6,
    "potencia_motor_cv": 0.25,
    "potencia_motor_kw": 0.18,
    "tamanho": "A"
  },
  "CFW500A02P6S2NB20H03SD": {
    "alimentacao": "Monofásica 200-240V", 
    "corrente_nominal": 2.6,
    "potencia_motor_cv": 0.5,
    "potencia_motor_kw": 0.37,
    "tamanho": "A"
  },
  "CFW500A04P3S2NB20H03SD": {
    "alimentacao": "Monofásica 200-240V",
    "corrente_nominal": 4.3,
    "potencia_motor_cv": 1.0,
    "potencia_motor_kw": 0.75,
    "tamanho": "A"
  },
  "CFW500A07P0S2NB20H03SD": {
    "alimentacao": "Monofásica 200-240V",
    "corrente_nominal": 7.3,
    "potencia_motor_cv": 2.0,
    "potencia_motor_kw": 1.5,
    "tamanho": "B"
  },
  "CFW500B10P0B2DB20H03SD": {
    "alimentacao": "Monofásica 200-240V",
    "corrente_nominal": 10,
    "potencia_motor_cv": 3.0,
    "potencia_motor_kw": 2.2,
    "tamanho": "B"
  },
  "CFW500A07P0T2NB20H03SD": {
    "alimentacao": "Trifásica 200-240V",
    "corrente_nominal": 7,
    "potencia_motor_cv": 2.0,
    "potencia_motor_kw": 1.5,
    "tamanho": "A"
  },
  "CFW500A09P6T2NB20H03SD": {
    "alimentacao": "Trifásica 200-240V",
    "corrente_nominal": 9.6,
    "potencia_motor_cv": 3.0,
    "potencia_motor_kw": 2.2,
    "tamanho": "A"
  },
  "CFW500B16P0T2DB20H03SD": {
    "alimentacao": "Trifásica 200-240V",
    "corrente_nominal": 16,
    "potencia_motor_cv": 5.0,
    "potencia_motor_kw": 3.7,
    "tamanho": "B"
  },
  "CFW500C24P0T2DB20H03SD": {
    "alimentacao": "Trifásica 200-240V",
    "corrente_nominal": 24,
    "potencia_motor_cv": 7.5,
    "potencia_motor_kw": 5.5,
    "tamanho": "C"
  },
  "CFW500D28P0T2DB20H03SD": {
    "alimentacao": "Trifásica 200-240V",
    "corrente_nominal": 28,
    "potencia_motor_cv": 10.0,
    "potencia_motor_kw": 7.5,
    "tamanho": "D"
  },
  "CFW500E56P0T2DB20H03SD": {
    "alimentacao": "Trifásica 200-240V",
    "corrente_nominal": 56,
    "potencia_motor_cv": 20.0,
    "potencia_motor_kw": 15.0,
    "tamanho": "E"
  },
  "CFW500A01P0T4NB20H03SD": {
    "alimentacao": "Trifásica 380-480V",
    "corrente_nominal": 1,
    "potencia_motor_cv": 0.25,
    "potencia_motor_kw": 0.18,
    "tamanho": "A"
  },
  "CFW500A02P6T4NB20H03SD": {
    "alimentacao": "Trifásica 380-480V",
    "corrente_nominal": 2.6,
    "potencia_motor_cv": 1.5,
    "potencia_motor_kw": 1.1,
    "tamanho": "A"
  },
  "CFW500B10P0T4DB20H03SD": {
    "alimentacao": "Trifásica 380-480V",
    "corrente_nominal": 10,
    "potencia_motor_cv": 5.0,
    "potencia_motor_kw": 3.7,
    "tamanho": "B"
  },
  "CFW500C14P0T4DB20H03SD": {
    "alimentacao": "Trifásica 380-480V",
    "corrente_nominal": 14,
    "potencia_motor_cv": 7.5,
    "potencia_motor_kw": 5.6,
    "tamanho": "C"
  },
  "CFW500D31P0T4DB20H03SD": {
    "alimentacao": "Trifásica 380-480V",
    "corrente_nominal": 31,
    "potencia_motor_cv": 20.0,
    "potencia_motor_kw": 15.0,
    "tamanho": "D"
  },
  "CFW500E49P0T4DB20H03SD": {
    "alimentacao": "Trifásica 380-480V",
    "corrente_nominal": 49,
    "potencia_motor_cv": 30.0,
    "potencia_motor_kw": 22.0,
    "tamanho": "E"
  }
};

// Pressure loss coefficients per meter for different pipe diameters
const coeficientesPerdaCarga = {
  25: 0.001,
  32: 0.0008,
  50: 0.0005,
  75: 0.0003,
  100: 0.0002
};

// Global variables for calculations
let calculationResults = {};

// DOM elements
const form = document.getElementById('calculatorForm');
const resultsDiv = document.getElementById('results');
const exportButton = document.getElementById('exportPDF');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  form.addEventListener('submit', handleFormSubmit);
  exportButton.addEventListener('click', exportToPDF);
  
  // Add real-time validation
  const inputs = form.querySelectorAll('input, select');
  inputs.forEach(input => {
    input.addEventListener('input', validateInput);
    input.addEventListener('blur', validateInput);
  });
  
  // Set default values to help with testing
  document.getElementById('irradiacaoSolar').value = '5.0';
  document.getElementById('rendimentoBomba').value = '30';
});

// Form submission handler
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Clear previous error messages
  clearErrors();
  
  if (!validateForm()) {
    showError('Por favor, preencha todos os campos corretamente.');
    scrollToFirstError();
    return;
  }
  
  const formData = getFormData();
  calculationResults = calculateSystem(formData);
  displayResults(calculationResults);
  
  // Show results with animation
  resultsDiv.classList.remove('hidden');
  resultsDiv.classList.add('show');
  
  // Scroll to results
  setTimeout(() => {
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

// Get form data
function getFormData() {
  return {
    vazaoDiaria: parseFloat(document.getElementById('vazaoDiaria').value),
    alturaSuccao: parseFloat(document.getElementById('alturaSuccao').value),
    alturaRecalque: parseFloat(document.getElementById('alturaRecalque').value),
    comprimentoTubulacao: parseFloat(document.getElementById('comprimentoTubulacao').value),
    diametroTubulacao: parseInt(document.getElementById('diametroTubulacao').value),
    irradiacaoSolar: parseFloat(document.getElementById('irradiacaoSolar').value),
    rendimentoBomba: parseFloat(document.getElementById('rendimentoBomba').value),
    potenciaPainel: parseInt(document.getElementById('potenciaPainel').value),
    tensaoSistema: parseInt(document.getElementById('tensaoSistema').value)
  };
}

// Main calculation function
function calculateSystem(data) {
  // Calculate pressure losses
  const perdaCarga = coeficientesPerdaCarga[data.diametroTubulacao] * data.comprimentoTubulacao;
  
  // Calculate total manometric height
  const alturaManometricaTotal = data.alturaSuccao + data.alturaRecalque + perdaCarga;
  
  // Calculate hourly flow rate
  const vazaoHoraria = data.vazaoDiaria / 24;
  
  // Calculate daily hydraulic energy (EH)
  const energiaHidraulicaDiaria = (9.81 * alturaManometricaTotal * 1000 * data.vazaoDiaria) / 3600;
  
  // Calculate required energy (L)
  const energiaNecessaria = energiaHidraulicaDiaria / (data.rendimentoBomba / 100);
  
  // Calculate photovoltaic power
  const potenciaFotovoltaica = (1.25 * energiaNecessaria) / data.irradiacaoSolar;
  
  // Calculate number of panels
  const numeroPaineis = Math.ceil(potenciaFotovoltaica / data.potenciaPainel);
  
  // Calculate total power
  const potenciaTotal = numeroPaineis * data.potenciaPainel;
  
  // Select pump
  const bombaRecomendada = selecionarBomba(vazaoHoraria, alturaManometricaTotal);
  
  // Select controller
  const controladorRecomendado = selecionarControlador(bombaRecomendada, data.tensaoSistema);
  
  return {
    alturaManometricaTotal,
    vazaoHoraria,
    perdaCarga,
    energiaHidraulicaDiaria,
    energiaNecessaria,
    potenciaFotovoltaica,
    numeroPaineis,
    potenciaTotal,
    bombaRecomendada,
    controladorRecomendado,
    inputData: data
  };
}

// Pump selection function
function selecionarBomba(vazaoHoraria, alturaManometrica) {
  let melhorBomba = null;
  let melhorScore = -1;
  
  for (const [modelo, specs] of Object.entries(bombasLeao)) {
    // Check if flow rate is within range
    if (vazaoHoraria >= specs.vazao_min && vazaoHoraria <= specs.vazao_max) {
      // Check if height is within range
      if (alturaManometrica <= specs.altura_max) {
        // Calculate efficiency score (prefer pumps closer to optimal range)
        const flowScore = 1 - Math.abs(vazaoHoraria - (specs.vazao_min + specs.vazao_max) / 2) / specs.vazao_max;
        const heightScore = 1 - alturaManometrica / specs.altura_max;
        const totalScore = flowScore * 0.6 + heightScore * 0.4;
        
        if (totalScore > melhorScore) {
          melhorScore = totalScore;
          melhorBomba = { modelo, ...specs };
        }
      }
    }
  }
  
  return melhorBomba;
}

// Controller selection function
function selecionarControlador(bomba, tensaoSistema) {
  if (!bomba) return null;
  
  // Calculate estimated current
  const potenciaBomba = bomba.potencia_max;
  const tensao = tensaoSistema;
  
  // Calculate current based on voltage system
  let correnteEstimada;
  if (tensaoSistema === 220) {
    // For 220V, check both single and three-phase options
    correnteEstimada = (potenciaBomba * 1000) / (tensao * 0.86 * 0.92); // Single phase
  } else {
    // For 380V, three-phase calculation
    correnteEstimada = (potenciaBomba * 1000) / (Math.sqrt(3) * tensao * 0.86 * 0.92);
  }
  
  // Find suitable controller
  let melhorControlador = null;
  let menorDiferenca = Infinity;
  
  for (const [modelo, specs] of Object.entries(controladoresCfw500)) {
    // Check voltage compatibility
    const voltageMatch = (tensaoSistema === 220 && specs.alimentacao.includes('200-240V')) ||
                        (tensaoSistema === 380 && specs.alimentacao.includes('380-480V'));
    
    if (voltageMatch && specs.corrente_nominal >= correnteEstimada) {
      const diferenca = specs.corrente_nominal - correnteEstimada;
      if (diferenca < menorDiferenca) {
        menorDiferenca = diferenca;
        melhorControlador = { modelo, ...specs };
      }
    }
  }
  
  return melhorControlador;
}

// Display results
function displayResults(results) {
  // Sistema Fotovoltaico
  document.getElementById('resultadoSistema').innerHTML = `
    <div class="result-item">
      <span class="result-label">Potência Fotovoltaica Necessária:</span>
      <span class="result-value">${results.potenciaFotovoltaica.toFixed(2)} W</span>
    </div>
    <div class="result-item">
      <span class="result-label">Número de Painéis:</span>
      <span class="result-value result-highlight">${results.numeroPaineis} unidades</span>
    </div>
    <div class="result-item">
      <span class="result-label">Potência Total Instalada:</span>
      <span class="result-value">${results.potenciaTotal.toFixed(0)} W</span>
    </div>
    <div class="result-item">
      <span class="result-label">Altura Manométrica Total:</span>
      <span class="result-value">${results.alturaManometricaTotal.toFixed(2)} m</span>
    </div>
    <div class="result-item">
      <span class="result-label">Vazão Horária:</span>
      <span class="result-value">${results.vazaoHoraria.toFixed(2)} m³/h</span>
    </div>
    <div class="result-item">
      <span class="result-label">Energia Hidráulica Diária:</span>
      <span class="result-value">${results.energiaHidraulicaDiaria.toFixed(2)} Wh</span>
    </div>
    <div class="result-item">
      <span class="result-label">Perdas de Carga:</span>
      <span class="result-value">${results.perdaCarga.toFixed(2)} m</span>
    </div>
  `;
  
  // Bomba Recomendada
  if (results.bombaRecomendada) {
    document.getElementById('resultadoBomba').innerHTML = `
      <div class="result-item">
        <span class="result-label">Modelo:</span>
        <span class="result-value result-highlight">Leão ${results.bombaRecomendada.modelo}</span>
      </div>
      <div class="result-item">
        <span class="result-label">Diâmetro do Poço:</span>
        <span class="result-value">${results.bombaRecomendada.diametro_poco}</span>
      </div>
      <div class="result-item">
        <span class="result-label">Aplicação:</span>
        <span class="result-value">${results.bombaRecomendada.aplicacao}</span>
      </div>
      <div class="result-item">
        <span class="result-label">Faixa de Vazão:</span>
        <span class="result-value">${results.bombaRecomendada.vazao_min} - ${results.bombaRecomendada.vazao_max} m³/h</span>
      </div>
      <div class="result-item">
        <span class="result-label">Altura Máxima:</span>
        <span class="result-value">${results.bombaRecomendada.altura_max} m</span>
      </div>
      <div class="result-item">
        <span class="result-label">Potência Máxima:</span>
        <span class="result-value">${results.bombaRecomendada.potencia_max} CV</span>
      </div>
      <div class="result-item">
        <span class="result-label">Recalque:</span>
        <span class="result-value">${results.bombaRecomendada.recalque}</span>
      </div>
    `;
  } else {
    document.getElementById('resultadoBomba').innerHTML = `
      <div class="error">
        <strong>Nenhuma bomba adequada encontrada!</strong><br>
        Verifique os parâmetros de vazão (${results.vazaoHoraria.toFixed(2)} m³/h) e altura manométrica (${results.alturaManometricaTotal.toFixed(2)} m).
      </div>
    `;
  }
  
  // Controlador Recomendado
  if (results.controladorRecomendado) {
    document.getElementById('resultadoControlador').innerHTML = `
      <div class="result-item">
        <span class="result-label">Modelo:</span>
        <span class="result-value result-highlight">${results.controladorRecomendado.modelo}</span>
      </div>
      <div class="result-item">
        <span class="result-label">Alimentação:</span>
        <span class="result-value">${results.controladorRecomendado.alimentacao}</span>
      </div>
      <div class="result-item">
        <span class="result-label">Corrente Nominal:</span>
        <span class="result-value">${results.controladorRecomendado.corrente_nominal} A</span>
      </div>
      <div class="result-item">
        <span class="result-label">Potência do Motor:</span>
        <span class="result-value">${results.controladorRecomendado.potencia_motor_cv} CV (${results.controladorRecomendado.potencia_motor_kw} kW)</span>
      </div>
      <div class="result-item">
        <span class="result-label">Tamanho:</span>
        <span class="result-value">${results.controladorRecomendado.tamanho}</span>
      </div>
    `;
  } else {
    document.getElementById('resultadoControlador').innerHTML = `
      <div class="error">
        <strong>Nenhum controlador adequado encontrado!</strong><br>
        Verifique a potência da bomba e tensão do sistema.
      </div>
    `;
  }
}

// Form validation
function validateForm() {
  const inputs = form.querySelectorAll('input[required], select[required]');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value || input.value === '') {
      isValid = false;
      markFieldAsError(input, 'Campo obrigatório');
    } else {
      clearFieldError(input);
    }
  });
  
  // Validate specific ranges
  const irradiacao = document.getElementById('irradiacaoSolar');
  const rendimento = document.getElementById('rendimentoBomba');
  
  if (irradiacao.value && (parseFloat(irradiacao.value) < 3.0 || parseFloat(irradiacao.value) > 7.0)) {
    isValid = false;
    markFieldAsError(irradiacao, 'Valor deve estar entre 3,0 e 7,0 kWh/m²/dia');
  }
  
  if (rendimento.value && (parseFloat(rendimento.value) < 30 || parseFloat(rendimento.value) > 95)) {
    isValid = false;
    markFieldAsError(rendimento, 'Valor deve estar entre 30% e 95%');
  }
  
  return isValid;
}

// Individual input validation
function validateInput(e) {
  const input = e.target;
  const value = parseFloat(input.value);
  
  // Clear previous error styling
  clearFieldError(input);
  
  // Validate based on input type
  if (input.id === 'irradiacaoSolar') {
    if (input.value && (value < 3.0 || value > 7.0)) {
      markFieldAsError(input, 'Valor deve estar entre 3,0 e 7,0 kWh/m²/dia');
    }
  } else if (input.id === 'rendimentoBomba') {
    if (input.value && (value < 30 || value > 95)) {
      markFieldAsError(input, 'Valor deve estar entre 30% e 95%');
    }
  } else if (input.hasAttribute('required') && (!input.value || input.value === '')) {
    markFieldAsError(input, 'Campo obrigatório');
  }
}

// Mark field as error
function markFieldAsError(field, message) {
  field.classList.add('error');
  
  // Remove existing error message
  const existingError = field.parentNode.querySelector('.field-error');
  if (existingError) {
    existingError.remove();
  }
  
  // Add error message
  const errorSpan = document.createElement('span');
  errorSpan.className = 'field-error';
  errorSpan.style.color = 'var(--color-error)';
  errorSpan.style.fontSize = 'var(--font-size-sm)';
  errorSpan.style.marginTop = 'var(--space-4)';
  errorSpan.style.display = 'block';
  errorSpan.textContent = message;
  
  field.parentNode.appendChild(errorSpan);
}

// Clear field error
function clearFieldError(field) {
  field.classList.remove('error');
  const errorMessage = field.parentNode.querySelector('.field-error');
  if (errorMessage) {
    errorMessage.remove();
  }
}

// Clear all errors
function clearErrors() {
  const errorMessages = document.querySelectorAll('.error-message, .field-error');
  errorMessages.forEach(error => error.remove());
  
  const errorFields = document.querySelectorAll('.error');
  errorFields.forEach(field => field.classList.remove('error'));
}

// Scroll to first error
function scrollToFirstError() {
  const firstError = document.querySelector('.error');
  if (firstError) {
    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstError.focus();
  }
}

// Show error message
function showError(message) {
  // Remove existing error messages
  const existingError = document.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
  
  // Create new error message
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error error-message';
  errorDiv.textContent = message;
  
  // Insert before form
  form.parentNode.insertBefore(errorDiv, form);
  
  // Remove after 5 seconds
  setTimeout(() => {
    if (errorDiv.parentNode) {
      errorDiv.remove();
    }
  }, 5000);
}

// Export to PDF
function exportToPDF() {
  if (!calculationResults || Object.keys(calculationResults).length === 0) {
    showError('Nenhum resultado para exportar. Execute o cálculo primeiro.');
    return;
  }
  
  // Check if jsPDF is loaded
  if (typeof window.jspdf === 'undefined') {
    showError('Biblioteca PDF não carregada. Tente recarregar a página.');
    return;
  }
  
  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Set font
    doc.setFont('helvetica');
    
    // Header
    doc.setFontSize(18);
    doc.setTextColor(27, 54, 93);
    doc.text('Relatório de Dimensionamento', 20, 25);
    doc.text('Sistema de Bombeamento Solar', 20, 35);
    
    // Date
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Data: ${new Date().toLocaleDateString('pt-BR')} - ${new Date().toLocaleTimeString('pt-BR')}`, 20, 45);
    
    // Input data
    doc.setFontSize(14);
    doc.setTextColor(27, 54, 93);
    doc.text('Dados de Entrada:', 20, 60);
    
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    let yPos = 70;
    
    const inputData = calculationResults.inputData;
    doc.text(`Vazão diária: ${inputData.vazaoDiaria} m³/dia`, 20, yPos);
    doc.text(`Altura de sucção: ${inputData.alturaSuccao} m`, 20, yPos + 8);
    doc.text(`Altura de recalque: ${inputData.alturaRecalque} m`, 20, yPos + 16);
    doc.text(`Comprimento da tubulação: ${inputData.comprimentoTubulacao} m`, 20, yPos + 24);
    doc.text(`Diâmetro da tubulação: ${inputData.diametroTubulacao} mm`, 20, yPos + 32);
    doc.text(`Irradiação solar: ${inputData.irradiacaoSolar} kWh/m²/dia`, 20, yPos + 40);
    doc.text(`Rendimento da bomba: ${inputData.rendimentoBomba}%`, 20, yPos + 48);
    doc.text(`Potência do painel: ${inputData.potenciaPainel} W`, 20, yPos + 56);
    doc.text(`Tensão do sistema: ${inputData.tensaoSistema} V`, 20, yPos + 64);
    
    // Results
    yPos += 80;
    doc.setFontSize(14);
    doc.setTextColor(27, 54, 93);
    doc.text('Resultados do Sistema:', 20, yPos);
    
    yPos += 10;
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(`Altura manométrica total: ${calculationResults.alturaManometricaTotal.toFixed(2)} m`, 20, yPos);
    doc.text(`Vazão horária: ${calculationResults.vazaoHoraria.toFixed(2)} m³/h`, 20, yPos + 8);
    doc.text(`Energia hidráulica diária: ${calculationResults.energiaHidraulicaDiaria.toFixed(2)} Wh`, 20, yPos + 16);
    doc.text(`Potência fotovoltaica necessária: ${calculationResults.potenciaFotovoltaica.toFixed(2)} W`, 20, yPos + 24);
    doc.text(`Número de painéis: ${calculationResults.numeroPaineis} unidades`, 20, yPos + 32);
    doc.text(`Potência total instalada: ${calculationResults.potenciaTotal} W`, 20, yPos + 40);
    
    // Pump recommendation
    yPos += 55;
    doc.setFontSize(14);
    doc.setTextColor(27, 54, 93);
    doc.text('Bomba Recomendada:', 20, yPos);
    
    yPos += 10;
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    if (calculationResults.bombaRecomendada) {
      const bomba = calculationResults.bombaRecomendada;
      doc.text(`Modelo: Leão ${bomba.modelo}`, 20, yPos);
      doc.text(`Diâmetro do poço: ${bomba.diametro_poco}`, 20, yPos + 8);
      doc.text(`Aplicação: ${bomba.aplicacao}`, 20, yPos + 16);
      doc.text(`Faixa de vazão: ${bomba.vazao_min} - ${bomba.vazao_max} m³/h`, 20, yPos + 24);
      doc.text(`Altura máxima: ${bomba.altura_max} m`, 20, yPos + 32);
      doc.text(`Potência máxima: ${bomba.potencia_max} CV`, 20, yPos + 40);
      doc.text(`Recalque: ${bomba.recalque}`, 20, yPos + 48);
    } else {
      doc.text('Nenhuma bomba adequada encontrada', 20, yPos);
    }
    
    // Controller recommendation
    yPos += 65;
    doc.setFontSize(14);
    doc.setTextColor(27, 54, 93);
    doc.text('Controlador Recomendado:', 20, yPos);
    
    yPos += 10;
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    if (calculationResults.controladorRecomendado) {
      const controlador = calculationResults.controladorRecomendado;
      doc.text(`Modelo: ${controlador.modelo}`, 20, yPos);
      doc.text(`Alimentação: ${controlador.alimentacao}`, 20, yPos + 8);
      doc.text(`Corrente nominal: ${controlador.corrente_nominal} A`, 20, yPos + 16);
      doc.text(`Potência do motor: ${controlador.potencia_motor_cv} CV (${controlador.potencia_motor_kw} kW)`, 20, yPos + 24);
      doc.text(`Tamanho: ${controlador.tamanho}`, 20, yPos + 32);
    } else {
      doc.text('Nenhum controlador adequado encontrado', 20, yPos);
    }
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text('Relatório gerado pelo Dimensionador de Bombeamento Solar', 20, 280);
    
    // Save PDF
    const fileName = `relatorio-bombeamento-solar-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
    
    // Show success message
    const successDiv = document.createElement('div');
    successDiv.className = 'status status--success';
    successDiv.textContent = 'Relatório PDF gerado com sucesso!';
    successDiv.style.position = 'fixed';
    successDiv.style.top = '20px';
    successDiv.style.right = '20px';
    successDiv.style.zIndex = '1000';
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
      if (successDiv.parentNode) {
        successDiv.remove();
      }
    }, 3000);
    
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    showError('Erro ao gerar o relatório PDF. Tente novamente.');
  }
}