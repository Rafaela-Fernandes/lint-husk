module.exports = {
	types: [
		{ value: 'feat', name: 'feat:     Nova funcionalidade' },
		{ value: 'fix', name: 'fix:      Correção de bug' },
		{ value: 'docs', name: 'docs:     Mudanças apenas na documentação' },
		{
			value: 'style',
			name: 'style:    Mudanças que não afetam a lógica do código (formatação, espaços em branco, ponto e vírgulas faltando, etc)',
		},
		{
			value: 'refactor',
			name: 'refactor: Mudanças no código que nem corrigem um bug nem adicionam novas funcionalidades',
		},
		{
			value: 'perf',
			name: 'perf:     Mudança de código que melhora o desempenho',
		},
		{ value: 'test', name: 'test:     Adiciona novos testes ou corrige testes existentes' },
		{
			value: 'chore',
			name: 'chore:    Outras mudanças que não modificam arquivos de src ou testes',
		},
		{ value: 'revert', name: 'revert:   Reverte um commit anterior' },
		{ value: 'wip', name: 'wip:      Trabalho em progresso' },
		{
			value: 'build',
			name: 'build:    Mudanças que afetam o sistema de build ou dependências externas (exemplo: gulp, broccoli, npm)',
		},
		{
			value: 'ci',
			name: 'ci:       Mudanças nos arquivos de configuração e scripts de CI (exemplo: Travis, Circle, Jenkins, BrowserStack, SauceLabs)',
		},
	],
	messages: {
		type: "Select the type of change that you're committing:",
		scope: '\nDenote the SCOPE of this change (optional):',
		subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
		body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
		confirmCommit: 'Are you sure you want to proceed with the commit above?',
	},
	skipQuestions: ['body', 'customScope', 'breaking', 'footer'],
	subjectLimit: 100,
};
