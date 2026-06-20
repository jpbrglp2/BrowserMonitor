let siteAtual = null;
let inicioVisita = null;

/*
==================================
UTILIDADES
==================================
*/

function pegarDominio(url) {
    try {
        return new URL(url).hostname;
    } catch {
        return "desconhecido";
    }
}

/*
==================================
ESTATÍSTICAS
==================================
*/

function atualizarEstatisticas(site, tempo) {

    chrome.storage.local.get(
        ["estatisticas"],
        (dados) => {

            const stats =
                dados.estatisticas || {};

            if (!stats[site]) {

                stats[site] = {

                    tempo: 0,
                    visitas: 0

                };

            }

            stats[site].tempo += tempo;

            stats[site].visitas++;

            chrome.storage.local.set({

                estatisticas: stats

            });

        }
    );

}

/*
==================================
SALVAR VISITA
==================================
*/

function salvarVisita(site, inicio, fim) {

    const tempo =
        Math.floor((fim - inicio) / 1000);

    const registro = {

        site,

        entrada:
            new Date(inicio)
                .toLocaleString(),

        saida:
            new Date(fim)
                .toLocaleString(),

        tempo

    };

    atualizarEstatisticas(
        site,
        tempo
    );

    chrome.storage.local.get(
        ["historico"],
        (dados) => {

            const historico =
                dados.historico || [];

            historico.push(registro);

            chrome.storage.local.set({
                historico
            });

            console.log(
                "Visita salva:",
                registro
            );

        }
    );

}

/*
==================================
FINALIZAR VISITA ATUAL
==================================
*/

function finalizarVisitaAtual() {

    if (!siteAtual || !inicioVisita)
        return;

    salvarVisita(
        siteAtual,
        inicioVisita,
        Date.now()
    );

}

/*
==================================
TROCA DE ABAS
==================================
*/

chrome.tabs.onActivated.addListener(
    (activeInfo) => {

        chrome.tabs.get(
            activeInfo.tabId,
            (tab) => {

                if (!tab.url)
                    return;

                const novoSite =
                    pegarDominio(tab.url);

                if (
                    novoSite === siteAtual
                ) return;

                finalizarVisitaAtual();

                siteAtual =
                    novoSite;

                inicioVisita =
                    Date.now();

                console.log(
                    "Novo site:",
                    novoSite
                );

            }
        );

    }
);

/*
==================================
MUDANÇA DE URL
==================================
*/

chrome.tabs.onUpdated.addListener(
    (tabId, changeInfo, tab) => {

        if (
            changeInfo.status !== "complete"
        ) return;

        if (!tab.url)
            return;

        const novoSite =
            pegarDominio(tab.url);

        if (
            novoSite === siteAtual
        ) return;

        finalizarVisitaAtual();

        siteAtual =
            novoSite;

        inicioVisita =
            Date.now();

        console.log(
            "URL alterada:",
            novoSite
        );

    }
);

/*
==================================
FECHAMENTO DE ABA
==================================
*/

chrome.tabs.onRemoved.addListener(
    () => {

        finalizarVisitaAtual();

        siteAtual = null;
        inicioVisita = null;

        console.log(
            "Aba fechada"
        );

    }
);