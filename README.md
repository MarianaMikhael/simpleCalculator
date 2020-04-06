# simpleCalculator

Arquitetura e Projeto de Sistemas
Requisitos Não Funcionais
Requisito de Modificabilidade: a facilidade de modificação de um software
Realização da Atividade da Aula 4

-------------------------------------------------- PARTE 1 --------------------------------------------------

1.Explique os conceitos de coesão e acoplamento com as palavras de vocês e dê exemplos de códigos que apliquem os conceitos.
 
Acoplamento: Trata-se da interdependência entre as classes e o quanto uma classe depende de outra(s) para funcionar. Dizer que uma classe está fortemente acoplada a outra é o mesmo que dizer que a dependência entre ambas é muito grande.
 
Coesão: Trata-se da responsabilidade em comum que os métodos têm dentro de uma classe. Ou seja, um código coeso é aquele onde as classes delimitam de forma clara as responsabilidades quais seus métodos devem satifazer, a funcionalidade desses métodos têm que atender a um mesmo objetivo.
 
class Produto(object):
 
            def criarProduto():
                        #implementacao
 
            def editarProduto():
                        #implementacao
 
            def excluirPeoduto():
                        #implementacao
 
 
class Cadastro(Produto):
           
            def formCadastro():
                        #implementacao
 
            def botaoGravar():
                        Produto.criarProduto()
 
No exemplo acima, a classe "Produto" tem como objetivo persistir no Banco de Dados como um CRUD. Já a classe "Cadastro" objetiva interagir com o usuário a fim  de realizar o cadastro de um produto genérico. Ao contrário, códigos de baixa coesão tendem a tratar, ao mesmo tempo, das regras de negócio, persistência de dados e interação com usuário.
Podemos notar também um exemplo onde as classes são fortemente acopladas, pois a classe "Cadastro" depende da classe "Produto" para disponibilizar ao usuário o formulário em tela.
O ideal é um baixo nível de acoplamento para manter o código organizado e flexível. No entanto, quando se busca coesão comumente se cria novas classes fortemente acopladas.
Há sempre que ponderar qual conceito é mais aplicável, conforme as demandas de cada projeto.

2.Faça uma calculadora, funções matemáticas básicas, que implementa os conceitos de coesão e acoplamento, comente no código explicando os conceitos usados e como foram usados.

-------------------------------------------------- Parte 2 --------------------------------------------------

1.SOLID: Explique cada um dos princípios SOLID com suas palavras e dê exemplos de código.

 SOLID são cinco princípios da programação orientada a objetos

 [S]ingle Responsibility Principle (Princípio da Responsabilidade Única): Uma classe deve ter um, e somente um, motivo para mudar.
 Exemplo de código: 
 <?php
 //Ruim:
 function emailClients(array $clients): void
 {
     foreach ($clients as $client) {
         $clientRecord = $db->find($client);
         if ($clientRecord->isActive()) {
             email($client);
         }
     }
 }
 // Bom:
 function emailClients(array $clients): void
 {
     $activeClients = activeClients($clients);
     array_walk($activeClients, 'email');
 }
 function activeClients(array $clients): array
 {
     return array_filter($clients, 'isClientActive');
 }
 function isClientActive(int $client): bool
 {
     $clientRecord = $db->find($client);
     return $clientRecord->isActive();
 }

 [O]pen/Closed Principle (Princípio do Aberto/Fechado): Você deve ser capaz de estender um comportamento de uma classe, sem modificá-lo.]
 Exemplo de código: 
 <?php
 interface Remuneravel
 {
     public function remuneracao();
 }
 class ContratoClt implements Remuneravel
 {
     public function remuneracao()
     {
         //...
     }
 }
 class Estagio implements Remuneravel
 {
     public function remuneracao()
     {
         //...
     }
 }
 class FolhaDePagamento
 {
     protected $saldo;
     public function calcular(Remuneravel $funcionario)
     {
         $this->saldo = $funcionario->remuneracao();
     }
 }

 [L]iskov Substitution Principle (Princípio da Substituição de Liskov): As classes base devem ser substituíveis por suas classes derivadas.
 Exemplo de código: 
 <?php
 # - Sobrescrevendo um método que não faz nada...
 class Voluntario extends ContratoDeTrabalho
 {
     public function remuneracao()
     {
         // não faz nada
     }
 }
 # - Lançando uma exceção inesperada...
 class MusicPlay
 {
     public function play($file)
     {
         // toca a música   
     }
 }
 class Mp3MusicPlay extends MusicPlay
 {
     public function play($file)
     {
         if (pathinfo($file, PATHINFO_EXTENSION) !== 'mp3') {
             throw new Exception;
         }

         // toca a música
     }
 }

 # - Retornando valores de tipos diferentes...
 class Auth
 {
     public function checkCredentials($login, $password)
     {
         // faz alguma coisa
         return true;
     }
 }
 class AuthApi extends Auth
 {
     public function checkCredentials($login, $password)
     {
         // faz alguma coisa
         return ['auth' => true, 'status' => 200];
     }
 }

 [I]nterface Segregation Principle (Princípio da Segregação de Interfaces): Muitas interfaces específicas são melhores do que uma interface única.
 Exemplo de código: 
 <?php
 interface Aves
 {
     public function setLocalizacao($longitude, $latitude);
     public function renderizar();
 }
 interface AvesQueVoam extends Aves
 {
     public function setAltitude($altitude);
 }
 class Papagaio implements AvesQueVoam
 {
     public function setLocalizacao($longitude, $latitude)
     {
         //Faz alguma coisa
     }
     public function setAltitude($altitude)
     {
         //Faz alguma coisa   
     }
     public function renderizar()
     {
         //Faz alguma coisa
     }
 }
 class Pinguim implements Aves
 {
     public function setLocalizacao($longitude, $latitude)
     {
         //Faz alguma coisa
     }
     public function renderizar()
     {
         //Faz alguma coisa
     }
 }

 [D]ependency Inversion Principle (Princípio da Inversão de Dependências): Dependa de uma abstração e não de uma implementação.
 Exemplo de código: 
 <?php
 interface DBConnectionInterface
 {
     public function connect();
 }
 class MySQLConnection implements DBConnectionInterface
 {
     public function connect()
     {
         // ...
     }
 }
 class OracleConnection implements DBConnectionInterface
 {
     public function connect()
     {
         // ...
     }
 }
 class PasswordReminder
 {
     private $dbConnection;
     public function __construct(DBConnectionInterface $dbConnection) {
         $this->dbConnection = $dbConnection;
     }
     // Faz alguma coisa
 }

2.Arquitetura em cebola:

 O que é a arquitetura em cebola?
 R:É uma arquitetura divididas em camadas, 
 -	Enterprise Business Rules (encontra-se Regras de negócios)
 -	Application Business Rules (encontra-se Casos de uso)
 -	Interface Adapters (encontra-se os Controladores)
 -	Frameworks e Drivers (Estruturas externas, Banco de dados, interfaces web entre outros )

 Qual seu benefício?
 R:Aumento da coesão e baixo acoplamento, facilidade no entendimento e maior flexibilidade.

 Quando utilizar?
 R:É utilizado geralmente em sistemas complexos que necessitam da separação em módulos para atingir os requisitos funcionais e não funcionais do sistemas, e facilitar o entendimento.

 Quando não utilizar?
 R:Não é recomendado para sistemas simples e baseados em dados, tais como sistemas que necessitam somente de criação, leitura, edição e exclusão de dados (CRUD)

3.DDD 

 O que é DDD?
 R:Domain-Driven Design ou Design Controlado por Domínio é um padrão de modelagem de software para necessidades complexas, conectando a implementação a um modelo em evolução. O DDD procura reforçar conceitos e boas práticas relacionadas a Orientação a Objetos.

 Quais são as camadas do DDD? Qual a função de cada uma?
 R:
 -Interface de Usuário - responsável pela exibição de informações do sistema ao usuário e também por interpretar comandos do usuário.
 -Aplicação - essa camada não possui lógica de negócio. È uma camada fina, responsável por conectar a Interface de Usuário às camadas inferiores.
 -Domínio - representa os conceitos, regras e lógicas de negócio. Todo o foco de DDD está nessa camada.
 -Infra-Estrutura - fornece recursos técnicos que darão suporte às camadas superiores. São normalmente as partes de um sistemas responsáveis por persistência de dados, conexões com banco de dados, envio de mensagens por redes, gravação e leitura de discos, etc.

 O que são mapas de contexto?
 R:Uma forma programática de documentar claramente os vários Contextos Delimitados que fazem parte de um sistema complexo. No mapa de  contextos ressaltamos os componentes do software e como as equipes que cuidam desse sistema interagem, além de possibilitar a criação de  uma mapa de tradução que servirá como facilitador da comunicação entre os times.
 
 -------------------------------------------------- Parte 3 --------------------------------------------------
 
1.Refatore a calculadora, implemente pelo menos dois princípios SOLID e comente no código explicando os princípios que foram usados e como foram usados. Caso ache que não precisa refatorar apenas comente os princípios aplicados e onde foram aplicados no código.
