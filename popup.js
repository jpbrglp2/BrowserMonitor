const ranking =
    document.getElementById("ranking");

const favorito =
    document.getElementById("favorito");

const tempoTotal =
    document.getElementById("tempo-total");

const btnLimpar =
    document.getElementById("limpar");

function formatarTempo(segundos) {

    const horas =
        Math.floor(segundos / 3600);

    const minutos =
        Math.floor(
            (segundos % 3600) / 60
        );

    const segs =
        segundos % 60;

    return `${horas}h ${minutos}m ${segs}s`;

}

chrome.storage.local.get(
    ["estatisticas"],
    (dados) => {

        const stats =
            dados.estatisticas || {};

        const sites =
            Object.entries(stats);

        if (sites.length === 0) {

            ranking.innerHTML =
                "<p>Nenhum dado registrado.</p>";

            return;

        }

        sites.sort(
            (a, b) =>
                b[1].tempo -
                a[1].tempo
        );

        let total = 0;

        const maiorTempo =
            sites[0][1].tempo;

        favorito.textContent =
            `🏆 Site Favorito: ${sites[0][0]}`;

        sites
            .slice(0, 5)
            .forEach(
                ([site, dados]) => {

                    total += dados.tempo;

                    const porcentagem =
                        (
                            dados.tempo /
                            maiorTempo
                        ) * 100;

                    const card =
                        document.createElement(
                            "div"
                        );

                    card.classList.add(
                        "site"
                    );

                    card.innerHTML = `
                        <div class="site-header">

                            <span>
                                ${site}
                            </span>

                            <span>
                                ${formatarTempo(dados.tempo)}
                            </span>

                        </div>

                        <small>
                            ${dados.visitas} visitas
                        </small>

                        <div class="barra">

                            <div
                                class="progresso"
                                style="width:${porcentagem}%"
                            ></div>

                        </div>
                    `;

                    ranking.appendChild(
                        card
                    );

                }
            );

        tempoTotal.textContent =
            `⏱ Tempo Total: ${formatarTempo(total)}`;

    }
);

btnLimpar.addEventListener(
    "click",
    () => {

        if (
            confirm(
                "Deseja apagar todos os dados?"
            )
        ) {

            chrome.storage.local.clear(
                () => {

                    location.reload();

                }
            );

        }

    }
);