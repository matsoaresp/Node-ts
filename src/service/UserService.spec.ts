import { UserService } from "./UserService";


describe('UserService', () => {
  it('Deve adicionar um novo usuario', () => {
    const userService = new UserService();
    const mockConsole = jest.spyOn(global.console, 'log').mockImplementation(() => {});

    userService.createUser('João', 'joao@example.com');

    // console foi chamado e o usuário foi adicionado ao "db" interno
    expect(mockConsole).toHaveBeenCalled();
    expect(userService.getAllUsers()).toContainEqual({ name: 'João', email: 'joao@example.com' });

    mockConsole.mockRestore();
  });  

  it('Deve retornar todos os usuarios', () => {
    const userService = new UserService();
    userService.createUser('Maria', 'maria@example.com');
    userService.createUser('Pedro', 'pedro@example.com');
    userService.createUser('Ana', 'ana@example.com');

    const usuarios = userService.getAllUsers();
    expect(usuarios).toHaveLength(3);
    expect(usuarios).toContainEqual({ name: 'Maria', email: 'maria@example.com' });
    expect(usuarios).toContainEqual({ name: 'Pedro', email: 'pedro@example.com' });
    expect(usuarios).toContainEqual({ name: 'Ana', email: 'ana@example.com' });
  });
});