document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculatorForm');
    const resultadosCard = document.getElementById('resultados');
    const exportPdfBtn = document.getElementById('exportPdf');
    
    let calculationResults = {};

    // Função para calcular perdas de carga por diâmetro
    function calcularPerdasCarga(diametro, comprimento) {
        const fatores = {
            25: 0.002,
            32: 0.0015,
            50: 0.001,
            75: 0.0007,
            100: 0.0005
        };
        
        return fatores[diametro] * comprimento;
    }

    // Função principal de cálculo
    function calcularSistema(dados) {
        const {
            vazao,
            altura_succao,
            altura_recalque,
            comprimento,
            diametro,
            irradiacao,
            rendimento,
            potencia_painel
        } = dados;

        // 1. Altura Manométrica Total
        const perdas_carga = calcularPerdasCarga(diametro, comprimento);
        const HMT = altura_succao + altura_recalque + perdas_carga;

        // 2. Energia Hidráulica Diária (Wh/dia)
        const EH = (9.81 * HMT * 1000 * vazao) / 3600;

        // 3. Energia Necessária (Wh/dia)
        const L = EH / (rendimento / 100);

        // 4. Potência Fotovoltaica (kWp)
        const P_FV = (1.25 * L) / (irradiacao * 1000);

        // 5. Número de Painéis
        const N = Math.ceil((P_FV * 1000) / potencia_painel);

        // 6. Potência Total (kWp)
        const P_total = (N * potencia_painel) / 1000;

        return {
            HMT: HMT,
            EH: EH,
            L: L,
            P_FV: P_FV,
            N: N,
            P_total: P_total,
            dados_entrada: dados
        };
    }

    // Função para validar entrada
    function validarDados(dados) {
        const erros = [];

        if (dados.vazao <= 0 || dados.vazao > 1000) {
            erros.push('Vazão deve estar entre 0.1 e 1000 m³/dia');
        }

        if (dados.altura_succao < 0 || dados.altura_succao > 200) {
            erros.push('Altura de sucção deve estar entre 0 e 200m');
        }

        if (dados.altura_recalque < 0 || dados.altura_recalque > 200) {
            erros.push('Altura de recalque deve estar entre 0 e 200m');
        }

        if (dados.comprimento <= 0 || dados.comprimento > 2000) {
            erros.push('Comprimento deve estar entre 1 e 2000m');
        }

        if (dados.irradiacao < 3.0 || dados.irradiacao > 7.0) {
            erros.push('Irradiação deve estar entre 3.0 e 7.0 kWh/m²/dia');
        }

        if (dados.rendimento < 10 || dados.rendimento > 95) {
            erros.push('Rendimento deve estar entre 10% e 95%');
        }

        return erros;
    }

    // Função para exibir resultados
    function exibirResultados(resultados) {
        document.getElementById('hmt').textContent = `${resultados.HMT.toFixed(2)} m`;
        document.getElementById('energia_hidraulica').textContent = `${resultados.EH.toFixed(0)} Wh/dia`;
        document.getElementById('energia_necessaria').textContent = `${resultados.L.toFixed(0)} Wh/dia`;
        document.getElementById('potencia_fv').textContent = `${resultados.P_FV.toFixed(3)} kWp`;
        document.getElementById('num_paineis').textContent = `${resultados.N} unidades`;
        document.getElementById('potencia_total').textContent = `${resultados.P_total.toFixed(3)} kWp`;
        
        resultadosCard.style.display = 'block';
        resultadosCard.scrollIntoView({ behavior: 'smooth' });
    }

    // Event listener para o formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const dados = {
            vazao: parseFloat(document.getElementById('vazao').value),
            altura_succao: parseFloat(document.getElementById('altura_succao').value),
            altura_recalque: parseFloat(document.getElementById('altura_recalque').value),
            comprimento: parseFloat(document.getElementById('comprimento').value),
            diametro: parseInt(document.getElementById('diametro').value),
            irradiacao: parseFloat(document.getElementById('irradiacao').value),
            rendimento: parseFloat(document.getElementById('rendimento').value),
            potencia_painel: parseInt(document.getElementById('potencia_painel').value)
        };

        // Validar dados
        const erros = validarDados(dados);
        if (erros.length > 0) {
            alert('Erro nos dados:\n' + erros.join('\n'));
            return;
        }

        // Calcular sistema
        calculationResults = calcularSistema(dados);
        
        // Exibir resultados
        exibirResultados(calculationResults);
    });

    // Função para exportar PDF
    function exportarPDF() {
        if (!calculationResults.dados_entrada) {
            alert('Execute o cálculo antes de exportar o PDF');
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Configurar fonte
        doc.setFont('helvetica');

        // Cabeçalho
        doc.setFontSize(18);
        doc.setTextColor(27, 54, 93); // Seltec Blue
        doc.text('Relatório de Dimensionamento - Seltec Energia', 20, 25);

        // Data e hora
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        const agora = new Date();
        const dataHora = `${agora.toLocaleDateString('pt-BR')} às ${agora.toLocaleTimeString('pt-BR')}`;
        doc.text(`Gerado em: ${dataHora}`, 20, 35);

        // Linha divisória
        doc.setDrawColor(27, 54, 93);
        doc.line(20, 40, 190, 40);

        // Dados de entrada
        doc.setFontSize(14);
        doc.setTextColor(27, 54, 93);
        doc.text('DADOS DE ENTRADA', 20, 55);

        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        let y = 65;
        const dados = calculationResults.dados_entrada;
        
        doc.text(`Vazão diária: ${dados.vazao} m³/dia`, 20, y);
        y += 8;
        doc.text(`Altura de sucção: ${dados.altura_succao} m`, 20, y);
        y += 8;
        doc.text(`Altura de recalque: ${dados.altura_recalque} m`, 20, y);
        y += 8;
        doc.text(`Comprimento da tubulação: ${dados.comprimento} m`, 20, y);
        y += 8;
        doc.text(`Diâmetro da tubulação: ${dados.diametro} mm`, 20, y);
        y += 8;
        doc.text(`Irradiação solar diária: ${dados.irradiacao} kWh/m²/dia`, 20, y);
        y += 8;
        doc.text(`Rendimento da bomba: ${dados.rendimento}%`, 20, y);
        y += 8;
        doc.text(`Potência do painel: ${dados.potencia_painel} Wp`, 20, y);

        // Resultados
        y += 20;
        doc.setFontSize(14);
        doc.setTextColor(27, 54, 93);
        doc.text('RESULTADOS DO DIMENSIONAMENTO', 20, y);

        doc.setFontSize(10);
        doc.setTextColor(0, 0, 0);
        y += 15;
        
        doc.text(`Altura manométrica total: ${calculationResults.HMT.toFixed(2)} m`, 20, y);
        y += 8;
        doc.text(`Energia hidráulica diária: ${calculationResults.EH.toFixed(0)} Wh/dia`, 20, y);
        y += 8;
        doc.text(`Energia necessária: ${calculationResults.L.toFixed(0)} Wh/dia`, 20, y);
        y += 8;
        doc.text(`Potência fotovoltaica necessária: ${calculationResults.P_FV.toFixed(3)} kWp`, 20, y);
        y += 8;
        doc.text(`Número de painéis necessários: ${calculationResults.N} unidades`, 20, y);
        y += 8;
        doc.text(`Potência total do sistema: ${calculationResults.P_total.toFixed(3)} kWp`, 20, y);

        // Rodapé
        y += 30;
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text('Este relatório foi gerado pelo Dimensionador Solar da Seltec Energia', 20, y);

        // Salvar PDF
        doc.save(`dimensionamento_solar_${agora.getTime()}.pdf`);
    }

    // Event listener para exportar PDF
    exportPdfBtn.addEventListener('click', exportarPDF);

    // Adicionar tooltips informativos
    const tooltips = {
        'vazao': 'Volume de água necessário por dia',
        'altura_succao': 'Distância vertical da bomba até o nível da água',
        'altura_recalque': 'Distância vertical da bomba até o ponto de descarga',
        'comprimento': 'Comprimento total da tubulação (sucção + recalque)',
        'diametro': 'Diâmetro interno da tubulação',
        'irradiacao': 'Média anual de irradiação solar da região',
        'rendimento': 'Eficiência da bomba (tipicamente 20-40%)',
        'potencia_painel': 'Potência nominal dos painéis solares'
    };

    // Adicionar títulos informativos aos campos
    Object.entries(tooltips).forEach(([id, tooltip]) => {
        const element = document.getElementById(id);
        if (element) {
            element.title = tooltip;
        }
    });
});