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
});