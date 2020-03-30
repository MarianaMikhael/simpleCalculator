# simpleCalculator

Arquitetura e Projeto de Sistemas
Requisitos Não Funcionais
Requisito de Modificabilidade: a facilidade de modificação de um software
Realização da Atividade da Aula 4

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
