# Hiking-Tips.com
Site de dicas para amantes de caminhada em meio à natureza
https://user-images.githubusercontent.com/102496892/166168076-06bb8f0f-778c-4076-a9a5-fac596a96c2d.mp4

Utilizei a biblioteca AOS para fazer essas animações que os componentes exibem. Também evoluí na utilização do CSS, pois aprendi a declarar variáveis e isso deixou meu
código mais fácil de ser alterado posteriormente.
Além disso, utilizei linear-gradient em textos e também mesclei degradê em texto e fundo no botão de submit. Isso pode parecer muito trivial, porém no código o degradê
em texto é aplicado removendo a cor de fundo exceto onde há texto e deixando o texto transparente, e por isso eu não poderia simplesmente criar um degradê diferente no
próprio elemento. Inclusive fazer isso nesse botão de submit me levou a definir uma das variáveis em CSS, pois o mesmo border-radius usado no botão precisava ser
aplicado no elemento que o continha.

A última parte do site contém uma integração com a API do OpenWeatherMap, que fornece as informações climáticas dos locais requeridos pelo usuário. Por fim, tanto o
conteúdo como o código do site foram exclusivamente escritos em inglês para me desafiar e deixar o código mais profissional.

Este projeto só foi possível graças à colaboração da Roberta Amaro, ela que me indicou como utilizar a API do OpenWeatherMap. Muito obrigado, Roberta!
