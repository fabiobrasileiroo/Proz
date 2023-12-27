function somar_clientes_cadastrados(data date) returns bigint
as $$
begin
  declare total bigint := 0;
  select count(*) into total from clientes where data_cadastro = $1;
  return total;
end;
$$ language plpgsql;

select somar_clientes_cadastrados(current_date);
